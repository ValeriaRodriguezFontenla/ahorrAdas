import slugify from "../helpers/functions"


type LocalStorage = {
        Categories?: Category[]

}

type Category = {
        id: number,
        name: string,
        title: string,
        slug: string
    }

const formAddCategory = document.getElementById('form-add-category');
const storage:LocalStorage = {}

const createCategory = (e) => {
     e.preventDefault();

     const form = e.target;
     const newCategoryName: string = form.name.value;

     const newCategory: Category = {
         id: 1,
         name: newCategoryName,
         slug: slugify(newCategoryName),
         title: ""

     }
     console.log(newCategory);
     

} 
formAddCategory.addEventListener('submit',createCategory) 



