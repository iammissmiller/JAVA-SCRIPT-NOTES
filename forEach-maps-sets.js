`forEach()` on Maps and Sets

1. `forEach()` on Maps

* Maps store key–value pairs.
* `forEach()` works similarly to arrays but parameters are different.
* Callback function receives three arguments:

  1. `value` → the current value
  2. `key` → the current key
  3. `map` → the entire Map object

Example:

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function(value, key, map) {
  console.log(`${key}: ${value}`);
});

Output:

```
USD: United States dollar
EUR: Euro
GBP: Pound sterling
```

---

2. `forEach()` on Sets

* Sets store **unique values** (no duplicates).
* `forEach()` is also available, but since Sets have no keys or indexes,
  the key parameter is identical to the value.
* Callback function still receives three arguments:

  1. `value` → the current value
  2. `key` → same as value (redundant)
  3. `set` → the entire Set object

Example:

```js
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR']);

currenciesUnique.forEach(function(value, _, set) {
  console.log(`${value}`);
});
```

Output:

```
USD
GBP
EUR
```

---

3. Why does Set’s `forEach()` keep the 3 parameters?

* Consistency: All `forEach()` methods (arrays, maps, sets) have the same signature.
* To avoid confusion for developers.
* The second parameter is redundant for Sets, so conventionally we use `_` to show it's ignored.

---

4. Summary

* Arrays: `(element, index, array)`
* Maps: `(value, key, map)`
* Sets: `(value, value, set)` → usually written as `(value, _, set)`

