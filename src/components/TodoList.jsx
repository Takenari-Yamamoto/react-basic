import React from 'react';

export const TodoList = ({ taskList, setTaskList }) => {
  const handleDelete = (id) => {
    setTaskList(taskList.filter((task, index) => index !== id));
  };

  const handleCompleted = (id) => {
    setTaskList(
      taskList.map((task, index) => {
        if (id === index) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      })
    );
  };

  return (
    <div className="todoList">
      <div className="todos">
        {taskList.map((task, index) => (
          <div
            key={index}
            className={`todo ${task.completed ? 'completed' : ''}`}
          >
            <p>{task.text}</p>
            <button onClick={() => handleCompleted(index)}>おしまい</button>
            <button onClick={() => handleDelete(index)}>ごみばこ</button>
          </div>
        ))}
      </div>
    </div>
  );
};
