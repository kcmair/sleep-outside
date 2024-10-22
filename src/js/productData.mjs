function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error('Bad Response');
  }
}

export function getData(category = 'tents') {
  const desiredIds = ['880RR', '985PR', '985RF', '344YJ'];
  return fetch(`../json/${category}.json`)
    .then(convertToJson)
    .then((data) => data.filter((item) => desiredIds.includes(item.Id)));
}

export async function findProductById(id) {
  const products = await getData();
  return products.find((item) => item.Id === id);
}
