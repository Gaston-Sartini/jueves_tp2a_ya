import AppError from "../errors/AppError.js";

function userNotFound(id) {
  return new AppError("USER_NOT_FOUND", `No user exists with id ${id}`, 404);
}

class UsersController {
  #useCases;
  constructor(useCases) {
    this.#useCases = useCases;
  }
  list = async (req, res) => {
    const result = await this.#useCases.getUsers();
    res.status(200).json(result);
  };
  get = async (req, res, next) => {
    const id = req.params.id;
    const user = await this.#useCases.getUserById(id);
    if(!user){
      throw userNotFound(id);
    }
    res.status(200).json(user);
  };
  create = async (req, res, next) => {
    return res.status(201).json(await this.#useCases.createUser(req.body));
  };
  update = async (req, res, next) => {
    const id = req.params.id;
    const updatedUser = await this.#useCases.updateUser(id, req.body);
    if(!updatedUser){
      throw userNotFound(id);
    }
    res.status(200).json(updatedUser);
  };
  remove = async (req, res, next) => {
    const id = req.params.id;
    if(!await this.#useCases.deleteUser(id)){
      throw userNotFound(id);
    }
    res.status(204).end();
  };
};

export default UsersController;