const mongoose = require("mongoose");
const { DateTime } = require("luxon");
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
  first_name: { type: String, required: true, maxLength: 100 },
  family_name: { type: String, required: true, maxLength: 100 },
  date_of_birth: { type: Date },
  date_of_death: { type: Date },
});

//virtual for author's full name
AuthorSchema.virtual("name").get(function () {
  //avoid error in case where author doesn't have family name or first names
  //can't use arrow func as we need the this object
  let fullname = "";
  if (this.first_name && this.family_name) {
    fullname = `${this.family_name} ${this.first_name}`;
  }
  return fullname;
});

//virtual for author's url
AuthorSchema.virtual("url").get(function () {
  return `/catalog/author/${this._id}`;
});

AuthorSchema.virtual("date_of_birth_formatted").get(function () {
  if (this.date_of_birth) {
    return DateTime.fromJSDate(this.date_of_birth).toLocaleString(DateTime.DATE_MED);
  }
});

AuthorSchema.virtual("date_of_death_formatted").get(function () {
  if (this.date_of_death) {
    return DateTime.fromJSDate(this.date_of_death).toLocaleString(DateTime.DATE_MED);
  } else {
    return "Present";
  }
});

AuthorSchema.virtual("date_of_birth_yyyy_mm_dd").get(function () {
  return DateTime.fromJSDate(this.date_of_birth).toISODate();
});

AuthorSchema.virtual("date_of_death_yyyy_mm_dd").get(function () {
  return DateTime.fromJSDate(this.date_of_death).toISODate();
});

//Export model
module.exports = mongoose.model("Author", AuthorSchema);
