# Components Folder

Contains the components used to render the whole interface

## Search Bar

![search bar preview](../../../docs/searchbar.gif)
It renders the search bar that gets the user input and pushes it to the query-string when the button is pressed.

## Breadcrumbs

![search bar preview](../../../docs/breadcrumbs.gif)
It renders the breadcrumbs that shows the categories related to the current search.

## Search Result Item

![search bar preview](../../../docs/result-search-item.gif)
It renders the component that shows each item resulting by the search.

| Prop |               Usage               |                          Example                          |
| :--: | :-------------------------------: | :-------------------------------------------------------: |
| item | object with the product item data | { id: "id", thumbnail: "url", title: "title", price: 80 } |

## Loading

![search bar preview](../../../docs/loading.gif)
It renders a loading animation for when the browser are fetching data.
