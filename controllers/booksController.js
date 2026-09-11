
function getAllBooks(req, res) {
     try{
            res.status(200).send("Get all Books");
     }catch(error){
            res.status(500).send("Error occurred while fetching books");
     }
}

function getBookById(req, res) {
     try{
            const { id } = req.params;
            res.status(200).send(`Get book by ID: ${id}`);
     }catch(error){
            res.status(500).send("Error occurred while fetching book by ID");
     }
}

function createBook(req, res) {
     try{
          const { title, author } = req.body;
          if(!title || !author) throw new Error("Title and author are required");
            res.status(201).send(`Create a new book ${title} by ${author}`);
     }catch(error){
            res.status(500).send(`Error occurred while creating a new book: ${error.message}`);
     }
}

function updateBookById(req, res) {
     try{
          const { id } = req.params;
          const { title, author } = req.body;
          if(!title || !author) throw new Error("Title and author are required");
            res.status(200).send(`Update book by ID: ${id} with title: ${title} and author: ${author}`);
     }catch(error){
            res.status(500).send(`Error occurred while updating book by ID: ${error.message}`);
     }
}

function deleteBookById(req, res) {
     try{
          const { id } = req.params;
            res.status(200).send(`Delete book by ID: ${id}`);
     }catch(error){
            res.status(500).send("Error occurred while deleting book by ID");
     }
}

export { getAllBooks, getBookById, createBook, updateBookById, deleteBookById };