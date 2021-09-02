function sortLinkedList (list) {
  let newList = new LinkedList ();
  while ( list.head !== null ) {
    let currentMax = findMax (list);
    list.remove(currentMax);
    newList.addToHead(currentMax);
  }
  return newList;
}
