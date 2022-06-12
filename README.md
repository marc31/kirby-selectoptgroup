# kirby-selectoptgroup

Small Kirby CMS pluggin to create select input with optgroup

# Field Blueprint exemple

```yml
label: Fruits
type: selectoptgroup
options:
  appel:
    label: Apple
    options:
      granny_smith: Granny Smith
      fuji: Fuji
  pear:
    label: Pear
    options:
      forelle: Forelle
      bosc: Bosc
```

If you select Granny Smith it will save into content

```txt
...
---

Fruits: apple-granny_smith

---
...
```
