import elements from "../periodic-table.json" with { type: "json" };

export default {
	check,
	// lookup,
};

let periodicTableTrie = {};

for (let element of elements) {
	let symbol = element.symbol.toLowerCase();
	let node = periodicTableTrie;
	for (let char of symbol) {
		node[char] = node[char] || {};
		node = node[char];
	}
	node[""] = element;
}

function check(inputWord) {
	// TODO: determine if `inputWord` can be spelled
	// with periodic table symbols; return array with
	// symbol objects if so (empty array otherwise)

	let index = 0;
	let node = periodicTableTrie;
	let objs = []

	while (index < inputWord.length) { 
		let char = inputWord[index].toLowerCase();
		if (node[char]) {
			node = node[char];
			index++;
		} else {
			if (node[""]) {
				objs.push(node[""]);
				node = periodicTableTrie;
			} else {
				break;
			}
		}

		if (index === inputWord.length && node[""]) {
			objs.push(node[""]);
			node = trie;
		}

	}

	return objs.reduce((acc, obj) => acc + obj['symbol'].length, 0) === inputWord.length ? objs : [];
}

// function lookup(elementSymbol) {
// 	// TODO: return the element entry based on specified
// 	// symbol (case-insensitive)

// 	return {};
// }
