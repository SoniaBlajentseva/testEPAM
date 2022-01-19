let library = document.getElementById('lib');

let idCounter = 1;

let dialog = document.getElementById('window'); //окно добавления книги
let dialogEdit = document.getElementById('windowEdit'); //окно редактирования книги

dialog.style.display = 'none';
dialogEdit.style.display = 'none';

function add() {
    dialog.style.display = 'block';
    dialog.show();  
}

function edit(_id, _title, _author, _year, _img_url) {
    dialogEdit.show(); 
    dialogEdit.style.display = 'block';
    let titleEdit = document.getElementById('titleEdit');
    let authorEdit = document.getElementById('authorEdit');
    let yearEdit = document.getElementById('yearEdit');
    let urlPhotoEdit = document.getElementById('urlPhotoEdit');

    titleEdit.value = _title;
    authorEdit.value = _author;
    yearEdit.value = _year;
    urlPhotoEdit.value = _img_url;

    editBtn.onclick = function() {
        let book = books.find((book) => book.id == _id)

        book.name.title = titleEdit.value;
        book.name.author = authorEdit.value;
        book.name.year = yearEdit.value;
        book.img_url = urlPhotoEdit.value;

        render();
        dialogEdit.close();
        dialogEdit.style.display = 'none';
    }

}

document.getElementById('show').onclick = add;
cancelBtn.onclick = function() {
    dialog.close();
    dialog.style.display = 'none';
}
cancelEditBtn.onclick = function() {
    dialogEdit.close();
    dialogEdit.style.display = 'none';
}

sub.onclick = function() {  
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let year = document.getElementById('year').value;
    let urlPhoto = document.getElementById('urlPhoto').value;

    books.push({
        id: idCounter++,
        img_url: urlPhoto,
        name: {
            title: title,
            author: author,
            year: year
        } 
    })

    render();
    dialog.close();  
    dialog.style.display = 'none';
};  

let books = [
    {
        id: idCounter++,
        img_url: 'https://im0-tub-ru.yandex.net/i?id=6fb1e32b13989b9e6d61005c399f9adb-l&n=13',
        name: {
            title: 'Секреты JavaScript ниндзя',
            author: 'Джон Резиг, Беэр Бибо',
            year: '2017 г.'
        }
    },
    {
        id: idCounter++,
        img_url: 'https://all-ebooks.net/uploads/posts/2021-09/1632064700_9785496024457.jpg',
        name: {
            title: 'ES6 и не только',
            author: 'Кайл Симпсон',
            year: '2017 г.'
        }
    },
    {
        id: idCounter++,
        img_url: 'https://cv7.litres.ru/pub/c/bumajnaya-kniga/cover_330/15243774-devid-soyer-makfarland-javascript-i-jquery-ischerpyvauschee-rukovodstvo-15243774.jpg',
        name: {
            title: 'JavaScript и Juery',
            author: 'Дэвид Сойер Макфарланд',
            year: '2016 г.'
        }
    },
    {
        id: idCounter++,
        img_url: 'https://cdn1.ozone.ru/multimedia/c1200/1011395255.jpg',
        name: {
            title: 'Изучаем программирование на JavaScript',
            author: 'Эрик Фримен, Элизабет Робсон',
            year: '2017 г.'
        }
    },   
]

function del(id) {
    books = books.filter((book) => book.id != id);
    render();
}

function render() {
    let html = '';
    books.forEach((book) => {
        html += `
        <div class="book">
            <div class="picture">
                <img src="${book.img_url}"
                    alt="">
            </div>
            <div class="name-book">
                <h3>${book.name.title}</h3>
                <h4>${book.name.author}</h4>
                <h5>${book.name.year}</h5>
            </div>
            <div class="btn">
                <button class="fa fa-pencil" onclick="edit(${book.id}, '${book.name.title}', '${book.name.author}', '${book.name.year}', '${book.img_url}')"></button>
                <button class="fa fa-trash-o" onclick="del(${book.id})"></button>
            </div>
        </div>
        `
    })

    library.innerHTML = html;
}
render();