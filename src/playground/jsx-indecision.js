
const app = {
    title: 'Indecision Project',
    subTitle: 'This is some info.',
    options: []
};


const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        templateRender();
    }
};

const reset = () => {
    app.options = [];
    templateRender();
};

const onMakeDescision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const appRoot = document.getElementById('app');


const templateRender = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subTitle && <p>{app.subTitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
            <button disabled={app.options.length == 0} onClick={onMakeDescision}>What should I do?</button>
            <button onClick={reset}>Remove All</button>
            <ol>
               { app.options.map((option) => <li key={option}>{option}</li>)
               }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
        
    ReactDOM.render(template, appRoot);
};

templateRender();
