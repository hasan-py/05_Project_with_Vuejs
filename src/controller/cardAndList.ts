export const cardDataHandler = (
  dataset: Array<any>,
  setDataset: Function,
  name: string,
  value: string | boolean | number,
  index: number
) => {
  const copy = [...dataset];
  copy[index][name] = value;
  setDataset(copy);
};

export const listDataHandler = (
  dataset: Array<any>,
  setDataset: Function,
  name: string,
  value: string | boolean | number,
  index: number
) => {
  const copy = [...dataset];
  copy[index][name] = value;
  setDataset(copy);
};

export const newCardAddHandler = (
  dataset: Array<any>,
  setDataset: Function,
  index: number
) => {
  const copy = [...dataset];
  copy[index].list.push({
    id: `${index}-${copy[index].list?.length}`,
    name: `${copy[index]["newCardInput"]}`,
    isLocked: false,
  });
  copy[index]["newCardInput"] = "";

  setDataset(copy);
};

export const newListAddHandler = (
  dataset: Array<any>,
  setDataset: Function,
  value: string,
  setNewListInput: any
) => {
  const copy = [...dataset];
  copy.push({
    id: +copy?.length + 1,
    labelName: value,
    list: [],
    newCardInput: "",
    renameListName: false,
  });

  setDataset(copy);
  setNewListInput("");
};
