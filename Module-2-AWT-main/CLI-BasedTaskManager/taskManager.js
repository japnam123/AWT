const repl = require('repl');
const fs = require('fs').promises;

// Dynamic import for chalk
let chalk;

async function initialize() {
    chalk = (await import('chalk')).default;
    
    let tasks = [];

    async function loadTasks() {
        try {
            const data = await fs.readFile('tasks.json', 'utf8');
            tasks = JSON.parse(data);
        } catch (error) {
            tasks = [];
        }
    }

    async function saveTasks() {
        try {
            await fs.writeFile('tasks.json', JSON.stringify(tasks, null, 2));
        } catch (error) {
            console.error(chalk.red('Error saving tasks:', error.message));
        }
    }

    const addTask = (description) => {
        if (!description) {
            console.log(chalk.red('Please provide a task description'));
            return;
        }
        const task = {
            id: Date.now(),
            description,
            completed: false,
            createdAt: new Date().toISOString()
        };
        tasks.push(task);
        saveTasks();
        console.log(chalk.green(`Task added: ${description}`));
    };

    const deleteTask = (id) => {
        const initialLength = tasks.length;
        tasks = tasks.filter(task => task.id !== parseInt(id));
        if (tasks.length < initialLength) {
            saveTasks();
            console.log(chalk.green(`Task ${id} deleted`));
        } else {
            console.log(chalk.red(`Task ${id} not found`));
        }
    };

    const listTasks = () => {
        if (tasks.length === 0) {
            console.log(chalk.yellow('No tasks found'));
            return;
        }
        console.log(chalk.blue('\nTasks:'));
        tasks.forEach((task, index) => {
            const status = task.completed ? chalk.green('[✓]') : chalk.red('[ ]');
            console.log(
                `${index + 1}. ${status} ID: ${task.id} - ${task.description} ` +
                chalk.gray(`(Created: ${new Date(task.createdAt).toLocaleDateString()})`)
            );
        });
    };

    const toggleTask = (id) => {
        const task = tasks.find(t => t.id === parseInt(id));
        if (task) {
            task.completed = !task.completed;
            saveTasks();
            console.log(chalk.green(`Task ${id} marked as ${task.completed ? 'completed' : 'incomplete'}`));
        } else {
            console.log(chalk.red(`Task ${id} not found`));
        }
    };

    await loadTasks();
    const replServer = repl.start({
        prompt: chalk.cyan('task> '),
        useColors: true
    });

    replServer.defineCommand('add', {
        help: 'Add a new task',
        action(description) {
            if (!description) {
                console.log(chalk.red('Please provide a task description'));
                this.displayPrompt();
                return;
            }
            addTask(description.trim());
            this.displayPrompt();
        }
    });

    replServer.defineCommand('delete', {
        help: 'Delete a task by ID',
        action(id) {
            if (!id || isNaN(id)) {
                console.log(chalk.red('Please provide a valid task ID'));
                this.displayPrompt();
                return;
            }
            deleteTask(id.trim());
            this.displayPrompt();
        }
    });

    replServer.defineCommand('toggle', {
        help: 'Toggle task completion',
        action(id) {
            if (!id || isNaN(id)) {
                console.log(chalk.red('Please provide a valid task ID'));
                this.displayPrompt();
                return;
            }
            toggleTask(id.trim());
            this.displayPrompt();
        }
    });

    replServer.defineCommand('list', {
        help: 'List all tasks',
        action() {
            listTasks();
            this.displayPrompt();
        }
    });

    replServer.on('exit', () => {
        console.log(chalk.yellow('Goodbye!'));
        process.exit();
    });
}

// Start the application
initialize().catch(err => console.error(err));
