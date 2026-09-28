# Plan personal — deporte y alimentación

Repo de Gabi: semana, recetas, compras y entrenamiento.

## En el súper (recomendado)

Lista **clicable** (tachar = en el carro; se guarda en el móvil):

**https://gabyballester.github.io/plan-personal-deporte-alimentaci-n/compras.html**

Inicio: [https://gabyballester.github.io/plan-personal-deporte-alimentaci-n/](https://gabyballester.github.io/plan-personal-deporte-alimentaci-n/)

No hace falta login. Los checks viven en `localStorage` de ese navegador (no se sincronizan entre móvil y PC).

## Plan en markdown

| Carpeta | Qué es |
|---------|--------|
| [`plan-activo/`](plan-activo/) | Plan verano (semana, recetario R1–R18, compras, entreno…) |
| [`plan-recuperacion-hernia/`](plan-recuperacion-hernia/) | Plan temporal post-op |
| [`archivos/`](archivos/) | Archivo histórico (Office, fotos alimentos…) |
| [`docs/`](docs/) | Web estática (GitHub Pages) |

Empieza por [`plan-activo/semana.md`](plan-activo/semana.md) y [`plan-activo/compras.md`](plan-activo/compras.md).

## Actualizar la lista web

1. Edita `plan-activo/compras.md`
2. Refleja los ítems en `docs/compras-data.js`
3. Commit + push → Pages se actualiza sola
