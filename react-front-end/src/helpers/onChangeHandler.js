const onChangeHandler = (position, state, setState) => {
  const updatedCheckedState = state.map((item, index) =>
    index === position
      ? { ...item, checked: !item.checked }
      : { ...item, checked: item.checked }
  );
  setState(updatedCheckedState);
};

export default onChangeHandler;
