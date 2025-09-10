  "use client"
import { db } from "@/config/firebase.config";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import { useFormik } from "formik";
import { useSession } from "next-auth/react";
import { useState } from "react";
import * as yup from "yup";

const schema = yup.object().shape({
    fullName: yup.string().required("Full name is required").min(2),
    phone: yup.string().required("Phone number is required").min(11),
    email: yup.string().email("Enter a valid email"),
    apartment: yup.string().required("Apartment is required"),
    rentAmount: yup.number().required("Rent amount is required"),
    dueDate: yup.date().required("Due date is required"),
    paymentStatus: yup.string().oneOf(["paid","unpaid"]).required("Status is required"),
    notes: yup.string().required("Notes is required"),
});

export default function TenantForm () {
    const [open, setOpen] = useState(false);
    const {data : session} = useSession();
    // console.log(session)
    const handleClose = () =>{
        setOpen(false);
    };

    const {handleSubmit,handleChange,handleBlur,touched,values,errors } = useFormik({
        initialValues: {
            fullName:"",
            phone: "",
            email: "",
            apartment: "",
            rentAmount: "",
            dueDate: "",
            paymentStatus: "",
            notes: "",
        },
        onSubmit: async (values, {resetForm})=>{ 
               await addDoc(collection(db,"tenants"),{
                user: session?.user?.id,
                fullName: values.fullName,
                phone: values.phone,
                email: values.email,
                apartment: values.apartment,
                rentAmount: values.rentAmount,
                dueDate: values.dueDate,
                paymentStatus: values.paymentStatus,
                notes: values.notes,
                timeCreated : new Date().getTime(),
               }).then(()=>{
                  setOpen(true)
                 resetForm()
               })
               .catch(e =>{
                 console.error(e)
                 setOpen(false);
                 alert("Unable to submit")
               }) 
        },
        validationSchema:schema
    })
     return (
          <main className="min-h-screen max-w-3xl mx-auto my-10 px-6 py-8 bg-white shadow-lg rounded-xl">
             <h1 className="text-2xl font-semibold mb-6 text-center ">Add Tenant</h1>
             <form onSubmit={handleSubmit} 
              className="flex flex-col gap-5">
                 {/* full name and phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                        <TextField
                        fullWidth
                        label="Full Name"
                        placeholder="Enter full name"
                        type="text"
                        value={values.fullName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        id="fullName"/> 
                        {touched.fullName && errors.fullName ?<span className="text-red-500 text-xs">{errors.fullName} </span> : null }
                    </div>
                    <div>
                        <TextField
                        fullWidth
                        type="tel"
                        label="Phone Number"
                        placeholder="+234..."
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        id="phone"/>
                          {touched.phone && errors.phone ?<span className="text-red-500 text-xs">{errors.phone} </span> : null }
                    </div>
                </div>
                {/* Email + Apartment */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                        <TextField
                        fullWidth
                        label="Email"
                        placeholder="emmanuel@gmail.com"
                        type="email"
                         value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        id="email"/>
                          {touched.email && errors.email ?<span className="text-red-500 text-xs">{errors.email} </span> : null }
                    </div>
                    <div>
                        <TextField
                        fullWidth
                        label="Apartment/unit"
                        placeholder="1 bedroom"
                         value={values.apartment}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="text"
                        id="apartment"/>
                          {touched.apartment && errors.apartment ?<span className="text-red-500 text-xs">{errors.apartment} </span> : null }
                    </div>
                </div>
                {/* Rent Amount + Due date */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                        <TextField
                        fullWidth
                        label="Rent Amount"
                        type="number"
                        placeholder="Enter Rent Amount"
                         value={values.rentAmount}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        id="rentAmount"/>
                          {touched.rentAmount && errors.rentAmount ?<span className="text-red-500 text-xs">{errors.rentAmount} </span> : null }
                    </div>
                    <div>
                        <TextField
                        fullWidth
                        type="date"
                        label="Due date"
                        InputLabelProps={{shrink:true}}
                         value={values.dueDate}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        id="dueDate"
                        />
                          {touched.dueDate && errors.dueDate ?<span className="text-red-500 text-xs">{errors.dueDate} </span> : null }
                    </div>
                </div>
                {/* payment status */}
                <FormControl fullWidth>
                    <InputLabel id="paymentStatus-label">Payment Status</InputLabel>
                    <Select
                    labelId="paymentStatus-label"
                    id="paymentStatus"
                    name="paymentStatus"
                    label="payment Status"
                    value={values.paymentStatus}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    >
                        <MenuItem value="paid">Paid</MenuItem>
                        <MenuItem value="unpaid">Unpaid</MenuItem>
                    </Select>
                      {touched.paymentStatus && errors.paymentStatus?<span className="text-red-500 text-xs">{errors.paymentStatus} </span> : null }
                </FormControl>
                {/* Notes */}
                <div>
                    <TextField
                    fullWidth
                    multiline
                    rows={3}
                    type="text"
                    label="Notes"
                    placeholder="Enter your notes"
                    value={values.notes}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="notes"/>
                      {touched.notes && errors.notes ?<span className="text-red-500 text-xs">{errors.notes} </span> : null }
                </div>
                {/* Submit button */}
                 <div>
                    <Button fullWidth variant="contained" type="submit" color="primary">
                        Add Tenant
                    </Button>
                 </div>

             </form>
                {/* Success dialog */}
             <Dialog open={open} onClose={handleClose} >
                <DialogTitle>Success</DialogTitle>
                <DialogContent>
                     <Typography>Tenant added succesfully</Typography>
                </DialogContent>
                <DialogActions>
                     <Button onClick={handleClose}  color="primary"  variant="contained" autoFocus>
                        Close
                     </Button>
                </DialogActions>
             </Dialog>
       
          </main>
     )
}