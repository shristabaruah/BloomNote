const LabelNote = (labels,noteState ) => {
  return noteState.notes.filter((item) => item.label.includes(labels));
};

const LabelInNote = (noteLabel, label) => {
  return noteLabel.includes(label);
};

export { LabelNote, LabelInNote };
