const { Router } = require("express");
const { 
    usersIndex,
    usersStore,
    usersUpdate,
    usersPatch,
    usersDestroy, } = require("../controllers/users");



const router = Router();

router.get("/", usersIndex);

router.post("/", usersStore);

router.put("/:id", usersUpdate);

router.patch("/:id", usersPatch);

router.delete("/:id", usersDestroy);





module.exports = router;