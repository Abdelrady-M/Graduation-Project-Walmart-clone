import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiFillEdit, AiOutlineCheck } from "react-icons/ai";
import { userEditAction } from "../../store/slices/user";
// import { loginAuth } from "../../Services/auth";
import toast, { Toaster } from "react-hot-toast";

const UserEdit = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const [editingPass, setEditingPass] = useState(false);
  useEffect(() => {}, [user]);

  const [verfication, setVerfication] = useState(false);

  const [editUser, setUser] = useState({
    name: "",
    email: "",
  });

  const [editPass, setPass] = useState({
    password: "",
  });
  const [newPass, setNewPass] = useState({
    password: "",
    confirmPass: "",
  });

  const [errors, setErrors] = useState({
    nameError: "",
    emailError: "",
  });

  useEffect(() => {}, []);

  const inputChange = (e) => {
    var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const passwordRegx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;

    if (e.target.name == "name") {
      setUser({ ...editUser, name: e.target.value });
      setErrors({
        ...errors,
        nameError:
          e.target.value.length == 0
            ? "Name is required"
            : e.target.value.length < 3
            ? "Name must be at least 3 characters"
            : "",
      });
    } else if (e.target.name == "email") {
      setUser({ ...editUser, email: e.target.value });
      setErrors({
        ...errors,
        emailError:
          e.target.value.length == 0
            ? "Email is required"
            : regex.test(e.target.value)
            ? ""
            : "Invalid Email",
      });
    } else if (e.target.name == "password") {
      if (e.target.value === "") {
        setEditingPass(false);
      } else {
        setEditingPass(true);
      }
      setPass({ ...editPass, password: e.target.value });
    } else if (e.target.name == "newPassword") {
      setNewPass({ ...newPass, password: e.target.value });
    } else if (e.target.name == "confirmNewPassword") {
      setNewPass({ ...newPass, confirmPass: e.target.value });
    }
  };

  const userEditFormSubmit = async (e) => {
    e.preventDefault();
    let uName = user.name;
    let uEmail = user.email;
    let verfied = false;

    if (editUser.name === "" && editUser.email === "") {
      setUser({ ...editUser, email: uEmail, name: uName });
    } else if (editUser.name === "" && editUser.email !== "") {
      setUser({ ...editUser, name: uName });
      uEmail = editUser.email;
    } else if (editUser.name !== "" && editUser.email === "") {
      setUser({ ...editUser, email: uEmail });
      uName = editUser.name;
    }

    if (editingPass) {
      try {
        const passResult = await loginAuth({
          email: uEmail,
          password: editPass.password,
        });
        if (passResult.status == 200) {
          verfied = true;
        }
      } catch (error) {
        verfied = false;
        if (error.response) {
          const errorMessage = error.response.data.message;
          toast.error(errorMessage, {
            position: "top-center",
          });
        }
      }
    } else {
      verfied = true;
    }

    if (verfied) {
      const sentUser = {
        id: user._id,
        name: uName,
        email: uEmail,
        password: newPass.password,
      };
      dispatch(userEditAction(sentUser));
    } else {
      const sentUser = {
        id: user._id,
        name: uName,
        email: uEmail,
      };
      dispatch(userEditAction(sentUser));
    }
  };

  return (
    <>
      <div className="container mx-auto py-4">
        <h6 className="text-lg mb-5 font-bold">Edit Your Profile</h6>
        <form
          onSubmit={(e) => {
            userEditFormSubmit(e);
          }}
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {user._id ? (
              <>
                <div>
                  <label className="block font-medium">Full Name</label>
                  <input
                    type="text"
                    className="form-input p-3 outline-none bg-zinc-400 rounded text-black placeholder-black"
                    placeholder={user.name}
                    name="name"
                    value={editUser.name}
                    onChange={(e) => {
                      inputChange(e);
                    }}
                  />
                </div>

       

                <div className="my-3">
                  <label className="block font-medium">Password Changes</label>
                  <input
                    type="password"
                    className="form-input p-3 outline-none bg-zinc-400 rounded text-black placeholder-black mb-5"
                    placeholder="Current Password"
                    name="password"
                    value={editPass.password}
                    onChange={(e) => {
                      inputChange(e);
                    }}
                  />
                  <input
                    type="password"
                    className="form-input p-3 outline-none bg-zinc-400 rounded text-black placeholder-black mb-5"
                    placeholder="New Password"
                    name="newPassword"
                    value={newPass.password}
                    required={editingPass}
                    onChange={(e) => {
                      inputChange(e);
                    }}
                  />
                  <input
                    type="password"
                    className="form-input p-3 outline-none bg-zinc-400 rounded text-black placeholder-black"
                    placeholder="Confirm New Password"
                    name="confirmNewPassword"
                    value={newPass.confirmPass}
                    required={editingPass}
                    onChange={(e) => {
                      inputChange(e);
                    }}
                  />
                </div>
                <div className="text-center flex items-center justify-center text-white">
                  <button
                    type="button"
                    onClick={() => {
                      console.log({ ...editUser });
                    }} 
                    className="p-4 bg-red-950 rounded flex text-center justify-center items-center mr-5"
                  >
                    Cancel
                  </button>
                  <input type="submit" value="Save Changes" className="p-4 bg-cyan-950 rounded flex text-center justify-center items-center"/>
                </div>
              </>
            ) : (
              <>
                <div>
                  <label className="block">Full Name</label>
                  <p className="placeholder-wave form-input"></p>
                </div>
                <div>
                  <label className="block">Email</label>
                  <p className="placeholder-wave form-input"></p>
                </div>

                <div className="my-3">
                  <label className="block">Password Changes</label>
                  <p className="placeholder-wave form-input"></p>
                  <p className="placeholder-wave form-input"></p>
                  <p className="placeholder-wave form-input"></p>
                </div>
                <div className="text-right">
                  <button type="button">Cancel</button>
                  <input type="submit" value="Save Changes" className="p-3 outline-none bg-zinc-400 rounded text-black placeholder-black" />
                </div>
              </>
            )}
          </div>
        </form>
        <Toaster />
      </div>
    </>
  );
};

export default UserEdit;
