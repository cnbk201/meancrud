var Factory = function(Schema,mongoose) {

	this.Schema = Schema;
	this.mongoose = mongoose;
	this.Item = null;

	this.createSchemas = function() {

		PersonSchema = new this.Schema({
			name: String,
			surname: String, 
			age: Number

		});

		this.Person = mongoose.model('Person',PersonSchema);
	}

	this.insertPeople = function() {

		var hektor = new this.Person({
			name: 'hektor',
			surname: 'baboden',
			age: 35

		}); 

		var john = new this.Person({
			name: 'john',
			surname: 'johannis',
			age: 55

		}); 

		hektor.save();
		john.save();
	}

	this.getPerson = function(query,res) {

		this.Person.find(query,function(error,output) {
			res.json(output);
		});
	}
}

module.exports = Factory;