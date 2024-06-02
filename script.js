const handleSumbit = (e) => {
  e.preventDefault();

  const form = document.getElementById("form-container");
  form.style.display = "none";

  const card = document.getElementById("user-data");
  card.style.display = "block";
};
