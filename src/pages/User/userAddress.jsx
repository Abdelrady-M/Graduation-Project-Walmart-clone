import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { userAddressPostAction } from "../../store/slices/user";
import { getAddress } from "../../store/slices/userAddress";

const UserAddress = () => {
    const dispatch = useDispatch();
    const [newAddress, setAddress] = useState({
        country: "",
        fullName: "",
        phoneNumber: "",
        city: "",
        area: "",
        zipCode: "",
        street: "",
        building: "",
        floor: "",
        apartment: "",
        extraDetails: ""
    });

    const addressBook = useSelector((state) => state.user.user.addressBook);
    const user = useSelector((state) => state.user.user);
    const value = addressBook?.length;

    const inputChange = (e) => {
        setAddress({ ...newAddress, [e.target.name]: e.target.value });
    };

    const addressFormSubmit = (e) => {
        e.preventDefault();
        const sentAddress = [{ id: user._id }, [...addressBook, { ...newAddress }]];
        dispatch(getAddress(sentAddress, user._id));
        console.log(sentAddress);
    };

    return (
        <>
            <h6 className="h6 text-center my-4">Edit Your Addresses</h6>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 shadow-md">
                {(value) ? (
                    addressBook.map((address, index) => (
                        <div className="card p-2" key={address._id}>
                            <div className="flex justify-around items-center">
                                <div className="lead">
                                    <p className="lead">
                                        {address.city}, {address.country}
                                    </p>
                                </div>
                                <div className="lead">
                                    <p className="lead">
                                        {address.area}, {address.street}
                                    </p>
                                </div>
                                <div className="lead">
                                    <p className="lead">
                                        Building {address.building}, Floor {address.floor}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-span-full text-center">
                        <h3 className="h3">You didn't add any address yet!</h3>
                    </div>
                )}
            </div>

            <form onSubmit={(e) => addressFormSubmit(e)} className="my-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 shadow-md p-4">
                    <input
                        type="text"
                        className="form-control p-3 outline-none bg-zinc-400 rounded text-black placeholder-black"
                        placeholder="Country/Region"
                        name="country"
                        value={newAddress.country}
                        onChange={(e) => inputChange(e)}
                    />
                    <input
                        type="text"
                        className="form-control p-3 outline-none bg-zinc-400 rounded text-black placeholder-black"
                        placeholder="Full Name"
                        name="fullName"
                        value={newAddress.fullName}
                        onChange={(e) => inputChange(e)}
                    />
                    <input
                        type="tel"
                        className="form-control p-3 outline-none bg-zinc-400 rounded text-black placeholder-black"
                        placeholder="Phone number"
                        name="phoneNumber"
                        value={newAddress.phoneNumber}
                        onChange={(e) => inputChange(e)}
                    />
                    <input
                        type="text"
                        className="form-control p-3 outline-none bg-zinc-400 rounded text-black placeholder-black"
                        placeholder="City"
                        name="city"
                        value={newAddress.city}
                        onChange={(e) => inputChange(e)}
                    />
                    <input
                        type="text"
                        className="form-control p-3 outline-none bg-zinc-400 rounded text-black placeholder-black"
                        placeholder="Area"
                        name="area"
                        value={newAddress.area}
                        onChange={(e) => inputChange(e)}
                    />
                    <input
                        type="number"
                        className="form-control p-3 outline-none bg-zinc-400 rounded text-black placeholder-black"
                        placeholder="ZIP Code"
                        name="zipCode"
                        value={newAddress.zipCode}
                        onChange={(e) => inputChange(e)}
                    />
                    <input
                        type="text"
                        className="form-control p-3 outline-none bg-zinc-400 rounded text-black placeholder-black"
                        placeholder="Street"
                        name="street"
                        value={newAddress.street}
                        onChange={(e) => inputChange(e)}
                    />
                    <input
                        type="text"
                        className="form-control p-3 outline-none bg-zinc-400 rounded text-black placeholder-black"
                        placeholder="Building"
                        name="building"
                        value={newAddress.building}
                        onChange={(e) => inputChange(e)}
                    />
                    <input
                        type="number"
                        className="form-control p-3 outline-none bg-zinc-400 rounded text-black placeholder-black"
                        placeholder="Floor"
                        name="floor"
                        value={newAddress.floor}
                        onChange={(e) => inputChange(e)}
                    />
                    <input
                        type="number"
                        className="form-control p-3 outline-none bg-zinc-400 rounded text-black placeholder-black"
                        placeholder="Apartment"
                        name="apartment"
                        value={newAddress.apartment}
                        onChange={(e) => inputChange(e)}
                    />
                    <textarea
                        className="form-control p-3 outline-none bg-zinc-400 rounded text-black placeholder-black"
                        placeholder="Extra Details"
                        name="extraDetails"
                        value={newAddress.extraDetails}
                        onChange={(e) => inputChange(e)}
                    />
                </div>
                <button type="submit" className="btn btn-primary mt-4 p-4 bg-sky-950 rounded flex text-center justify-center items-center">
                    Save Changes
                </button>
            </form>
        </>
    );
}

export default UserAddress;
