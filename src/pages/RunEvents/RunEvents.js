import React from 'react';
import './RunEvents.css';

const saveButton = 'Сохранить';
const editButton = 'Редактировать';
const removeButton = 'Удалить';

class RunEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
    };
  }

  edit = () => {
    this.setState({ edit: true });
  };

  remove = () => {
    this.setState({ edit: false });
  };

  save = () => {
    this.setState({ edit: false });
  };

  rendNorm = () => {
    return (
      <div className="box">
        <div className="text">{this.text}</div>
        <button type="button" onClick={this.edit} className="btn light">
          {editButton}
        </button>
        <button type="button" onClick={this.remove} className="btn red">
          {removeButton}
        </button>
      </div>
    );
  }

  rendEdit = () => {
    return (
      <div className="box">
        <textarea defaultValue={this.text} />
        <button type="button" onClick={this.save} className="btn success">
          {saveButton}
        </button>
      </div>
    );
  }

  render() {
    const { edit } = this.state;
    return edit ? this.rendEdit() : this.rendNorm();
  }
}

export default RunEvents;
