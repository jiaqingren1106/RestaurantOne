import React from 'react';
import { colors } from 'react-select/src/theme';

class MyEditor extends React.Component{

    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.textarea.focus();
    }

    handleSubmit() {
        console.log(this.state.value)
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        const style = {
            maxHeight: "500px",
            minHeight: "38px",
            maxWidth: "500px",
            resize: "none",
            padding: "9px",
            boxSizing: "border-box",
            fontSize: "15px",
        };
        return (
            <div className = {"texteditor"}>
                <button onClick={this.handleSubmit}>
                        <textarea
                            style={style}
                            ref={c => (this.textarea = c)}
                            placeholder="type some text"
                            rows={500}
                            cols={500}
                            defaultValue=""
                            onChange={this.handleChange}
                        />
                    <input type="submit" value="Submit" />
                </button>
            </div>
        );
    }
}

export default MyEditor;