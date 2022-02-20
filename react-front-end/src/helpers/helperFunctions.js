




export default function helperFunctions() {

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [about, setAbout] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [avatar, setAvatar] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [submitted, setSubmitted] = useState("");
  const [error, setError] = useState("");
  
  const reset = () => {
    setFirstName("");
    setEmail("");
    setNumber("");
    setPassword("");
    setConfirmPassword("");
    setAbout("");
    setCity("");
    setProvince("");
    setAvatar("");
    setLinkedin("");
    setTimeout(() => setSubmitted(false), 5000);
  };
  
  const validate = () => {
    if (firstName === "") {
      setError("First name cannot be blank");
      return;
    }
    if (email === "") {
      setError("Email cannot be blank");
      return;
    }
    if (number === "") {
      setError("Number cannot be blank");
      return;
    }
    if (password === "") {
      setError("Password cannot be blank");
      return;
    }
    if (confirmPassword === "") {
      setError("Confirm password cannot be blank");
      return;
    }
    if (confirmPassword !== password) {
      setError("Confirm password and password inputs are different");
      return;
    }
    if (about === "") {
      setError("About cannot be blank");
      return;
    }
    if (city === "") {
      setError("City cannot be blank");
      return;
    }
    if (province === "") {
      setError("Province cannot be blank");
      return;
    }
    if (avatar === "") {
      setError("Avatar cannot be blank");
      return;
    }
    if (linkedin === "") {
      setError("Linkedin URL cannot be blank");
      return;
    }
    setError("");
    onSubmitHandler();
  };
  
  const onSubmitHandler = () => {
    const data = {
      first_name: firstName,
      last_name: "",
      email,
      number,
      password,
      designation: "",
      about,
      city,
      province,
      github_url: "",
      linkedin,
      resume: "",
      avatar,
      employer: true,
      skills: "",
    };
  };

  useEffect(() => {
    axios.get(`http://localhost:8080/api/employers/12`)
    .then((response) => {
      const employer = response.data[0];
      setFirstName(employer.first_name);
      setEmail(employer.email);
      setNumber(employer.phone_number);
      setAbout(employer.about_me);
      setCity(employer.city);
      setProvince(employer.province);
      setAvatar(employer.avatar);
      setLinkedin(employer.linkedin_url);
    });
  }, []);

  return {reset, validate, firstName, email, number, password, confirmPassword, about, city, province, avatar, linkedin};
}
