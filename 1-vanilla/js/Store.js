const tag = "[store]";

export default class Store {
  constructor(storage) {
    console.log(tag);

    if (!storage) throw "no storage";

    this.storage = storage;

    this.searchkeyword = "";
    this.searchResult = [];
  }
  search(keyword) {
    this.searchkeyword = keyword;
    this.searchResult = this.storage.productData.filter((product) =>
      product.name.includes(keyword)
    );
  }
}
