const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');

function createTree(container, arr) {
  container.append(createTreeDom(arr));
}

function createTreeDom(arr) {
  if (!arr.length) {
    return
  }
  let ul = document.createElement('ul');
  for (let item of arr) {
    let li = document.createElement('li');
    let div = document.createElement('div');
    div.append(addIcon(item.folder), item.title);
    div.className = 'elem';
    li.append(div);
    if (item.children) {
      let childrenUl = createTreeDom(item.children);
      if (childrenUl) {
        childrenUl.hidden = true;
        li.append(childrenUl);
      }
    } else if (item.folder && !item.children) {
      let emptyUl = document.createElement('ul');
      emptyUl.innerHTML = '<li><i>Folder is empty.</i></li>';
      emptyUl.hidden = true;
      li.append(emptyUl);
    }
    ul.append(li)
  }
  return ul;
}

function addIcon(isFolder) {
  let icon = document.createElement('i');
  icon.className = isFolder ? 'material-icons folder' : 'material-icons file';
  icon.innerHTML = isFolder ? 'folder' : 'insert_drive_file';
  return icon;
}

rootNode.onclick = function(event) {
  let img = event.target.querySelector('i');
  if (event.target.tagName !== 'DIV' || img.className === 'material-icons file') {
    return
  }
  img.textContent = img.textContent === 'folder' ? 'folder_open' : 'folder';
  let childrenContainer = event.target.parentNode.querySelector('ul');
  if (!childrenContainer) {
    return
  }
  childrenContainer.hidden = !childrenContainer.hidden;
}

createTree(rootNode, structure);
