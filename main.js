const inspect = (...arrays) => {
  const duplicates = [];
  const map = new Map();

  const fill = (array) =>
    array.forEach((item) => {
      if (map.has(item.id)) {
        duplicates.push(item);
      } else {
        map.set(item.id, item);
      }
    });

  arrays.forEach((array) => fill(array));

  console.log(duplicates);
  console.log([...map.values()]);
};

inspect(
  ["abcd", "abc", "ab", "a", "qwertyui"],
  ["a", "qwertyui", "ab", "abc", "defhgd", "abcd"]
);
