import { useContext } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { contactSchema } from "../../validations/contactValidation";
import { ContactContext } from "../../context/contactContext";
import { Spinner } from "../";
import { COMMENT, GREEN, PURPLE } from "../../helpers/colors";

const AddContact = () => {
	const { loading, groups, createContact } = useContext(ContactContext);

	return (
		<>
			{loading ? (
				<Spinner />
			) : (
				<>
					<section className="p-3">
						<img
							src={require("../../assets/man-taking-note.png")}
							height="400px"
							style={{
								position: "absolute",
								zIndex: "-1",
								top: "130px",
								left: "100px",
								opacity: "50%",
							}}
						/>
						<div className="container">
							<div className="row">
								<div className="col">
									<p
										className="h4 fw-bold text-center"
										style={{ color: GREEN }}
									>
										ساخت مخاطب جدید
									</p>
								</div>
							</div>
							<hr style={{ backgroundColor: GREEN }} />
							<div className="row mt-5">
								<div className="col-md-4">
									<Formik
										initialValues={{
											fullname: "",
											photo: "",
											mobile: "",
											email: "",
											job: "",
											group: "",
										}}
										validationSchema={contactSchema}
										onSubmit={(values) => {
											createContact(values);
										}}
									>
										<Form>
											<div className="mb-2">
												<Field
													name="fullname"
													className="form-control"
													placeholder="نام و نام خانوادگی"
												/>
												<ErrorMessage
													render={(msg) => (
														<div className="text-danger mt-1">{msg}</div>
													)}
													name="fullname"
												/>
											</div>
											<div className="mb-2">
												<Field
													name="photo"
													className="form-control"
													placeholder="آدرس تصویر"
												/>
												<ErrorMessage
													render={(msg) => (
														<div className="text-danger mt-1">{msg}</div>
													)}
													name="photo"
												/>
											</div>
											<div className="mb-2">
												<Field
													name="mobile"
													className="form-control"
													placeholder="شماره موبایل"
												/>
												<ErrorMessage
													render={(msg) => (
														<div className="text-danger mt-1">{msg}</div>
													)}
													name="mobile"
												/>
											</div>
											<div className="mb-2">
												<Field
													name="email"
													className="form-control"
													placeholder="آدرس ایمیل"
												/>
												<ErrorMessage
													render={(msg) => (
														<div className="text-danger mt-1">{msg}</div>
													)}
													name="email"
												/>
											</div>
											<div className="mb-2">
												<Field
													name="job"
													className="form-control"
													placeholder="شغل"
												/>
												<ErrorMessage
													render={(msg) => (
														<div className="text-danger mt-1">{msg}</div>
													)}
													name="job"
												/>
											</div>
											<div className="mb-2">
												<Field
													as="select"
													name="group"
													className="form-control"
												>
													<option value="">انتخاب گروه</option>
													{groups.length > 0 &&
														groups.map((group) => (
															<option key={group.id} value={group.id}>
																{group.name}
															</option>
														))}
												</Field>
												<ErrorMessage
													render={(msg) => (
														<div className="text-danger mt-1">{msg}</div>
													)}
													name="group"
												/>
											</div>
											<div className="mx-2">
												<input
													type="submit"
													className="btn"
													style={{ backgroundColor: PURPLE }}
													value="ساخت مخاطب"
												/>
												<Link
													to={"/contacts"}
													className="btn mx-2"
													style={{ backgroundColor: COMMENT }}
												>
													انصراف
												</Link>
											</div>
										</Form>
									</Formik>
								</div>
							</div>
						</div>
					</section>
				</>
			)}
		</>
	);
};

export default AddContact;
