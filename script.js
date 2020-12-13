// TO-DO webpage

// today
let today = new Date();

// instantiate string in localStorage for tracking completed tasks, string of 1s and 0s
if (!localStorage.complete_str) localStorage.complete_str = "";
let count = localStorage.complete_str.length;

// set saved date
if (!localStorage.last_day) localStorage.last_day = today.getTime().toString();
let last_day = new Date().setTime(Number(localStorage.last_day));

// logic vars
let todo_list_arr = [];
let new_order_by_str = "days";
let incomplete_display_value = "table-row";
let completed_display_value = "none";
let category_arr = ["relationship", "hobby", "money", "mail", "buy", "car", "yard", "chore", "house"];
let duration_dict = {
	"once": 0,
	"batch": 1,
	"repeating": 2,
	"weekly": 7,
	"biweekly": 14,
	"monthly": 30,
	"quarterly": 90
};

// buttons
let add_todo_button = document.getElementById("add-todo-button");
let order_toggle_button = document.getElementById("order-toggle-button");
let completed_toggle_button = document.getElementById("completed-toggle-button");

// inputs
let add_todo_name = document.getElementById("add-todo-name");
let add_todo_category = document.getElementById("add-todo-category");
let add_todo_duration = document.getElementById("add-todo-duration");
let filter_category = document.getElementById("filter-category");
let filter_duration = document.getElementById("filter-duration");

// for to add select options after adding todos
function add_select_options() {
  for (let category of category_arr) {
		let new_option = document.createElement("option");
		new_option.text = category;
		new_option.value = category;
		add_todo_category.add(new_option);
	};

	for (let key in duration_dict) {
		let new_option = document.createElement("option");
		new_option.text = key;
		new_option.value = duration_dict[key];
		add_todo_duration.add(new_option);
	};

	for (let category of category_arr) {
		let new_option = document.createElement("option");
		new_option.text = category;
		new_option.value = category;
		filter_category.add(new_option);
	};

	for (let key in duration_dict) {
		let new_option = document.createElement("option");
		new_option.text = key;
		new_option.value = duration_dict[key];
		filter_duration.add(new_option);
	};
};

function add_todo(name, category="none", duration="once", days="none") {
	// check if days included
	if (duration && days == "none") days = duration_dict[duration];

	// add new categories to filter later
	if (!category_arr.includes(category)) category_arr.push(category);

	// add new duration to filter later
	if (!duration_dict.hasOwnProperty(duration)) duration_dict[duration] = days;

	let new_todo = {
		name: name,
		category: category,
		priority: category_arr.indexOf(category),
		duration: duration,
		days: days,
		index: todo_list_arr.length
	};

	// check localStorage
	if (new_todo.index > localStorage.complete_str.length) {
	  new_todo.complete = 0;
	  localStorage.complete_str = localStorage.complete_str += "0";
	} else {
	  new_todo.complete = Number(localStorage.complete_str[new_todo.index]);
	};

	// for header tally
	if (new_todo.complete) count--;

	// add to list
	todo_list_arr.push(new_todo);
};

// add new todo from page
function submit_todo() {
  let new_todo_name = add_todo_name.value;
  let new_todo_category = add_todo_category.value;
  let new_todo_duration = add_todo_duration.value;

  add_todo(new_todo_name, new_todo_category, new_todo_duration);
};

function renew() {
  for (let todo of todo_list_arr) {
		if (todo.complete) {
		  switch(todo.days) {
			  case 1:
			    todo.complete = 0;
			    break;
			  case 2:
			    if (today.getDate()%2==0) todo.complete = 0;
			    break;
			  case :

			    break;
			  case :

			    break;
			  case :

			    break;
			  case :

			    break;
			  case :

			    break;
			  default:
			    // code block
			};
		};
	};
};

let duration_dict = {
	"once": 0,
	"batch": 1,
	"repeating": 2,
	"weekly": 7,
	"biweekly": 14,
	"monthly": 30,
	"quarterly": 90
};

// check if tasks need to be renewed
function check_if_need_renew() {
	// day of year, 0 (?) to 366 
	// change when 2021 from -12 to -13
	let today_date = Math.floor(today/1000/60/60/24/365%1*365-12);
	let last_day_date = Math.floor(last_day/1000/60/60/24/365%1*365-12);
  if (today.getTime() - last_day.getTime() < 86400000 && today_date == last_day_date) return;
  renew();
};

// add todos to todo_list_arr
add_todo("test name", "test category", "eight days", 8);
add_todo("b-days", "relationship", "monthly", 30);
add_todo("free turkey", "buy", "once", 0);
add_todo("vacuum", "chore", "weekly", 7);
add_todo("mop", "chore", "weekly", 7);
add_todo("wash car", "chore", "weekly", 7);
add_todo("clean car interior", "chore", "weekly", 7);
add_todo("paint car", "car", "once", 0);
add_todo("change oil", "car", "quarterly", 90);
add_todo("mow", "yard", "weekly", 7);
add_todo("rake", "yard", "weekly", 7);
add_todo("trim", "yard", "weekly", 7);
add_todo("fix weedwacker", "yard", "once", 0);
add_todo("clean bathroom", "chore", "weekly", 7);
add_todo("clean kitchen", "chore", "weekly", 7);
add_todo("install fan", "house", "once", 0);
add_todo("install cameras", "house", "once", 0);
add_todo("mouthwash", "buy", "batch", 1);
add_todo("soap bars", "buy", "batch", 1);
add_todo("earphones", "buy", "once", 0);
add_todo("new phone", "buy", "once", 0);
add_todo("tithe", "money", "biweekly", 14);
add_todo("scuba dive", "hobby", "repeating", 2);
add_todo("fish", "hobby", "repeating", 2);
add_todo("budget", "money", "monthly", 30);
add_todo("schedule", "chore", "weekly", 7);
add_todo("remove fallen tree", "yard", "once", 0);
add_todo("remove fence", "yard", "once", 0);
add_todo("remove shed", "yard", "once", 0);
add_todo("exterminate ants", "house", "once", 0);
add_todo("replace truck battery", "car", "once", 0);
add_todo("clean scuba gear", "chore", "once", 0);
add_todo("fix car AC", "car", "once", 0);
add_todo("flush radiator", "car", "once", 0);
add_todo("paint bathroom", "house", "once", 0);
add_todo("organize garage", "house", "once", 0);
add_todo("pool table", "buy", "once", 0);
add_todo("replace truck tires", "car", "once", 0);
add_todo("fix truck lights", "car", "once", 0);
add_todo("dog", "buy", "once", 0);
add_todo("motorcycle", "buy", "once", 0);
add_todo("ride horse", "hobby", "repeating", 2);
add_todo("parachute", "buy", "once", 0);
add_todo("skydiving", "hobby", "repeating", 2);
add_todo("laptop", "buy", "once", 0);
add_todo("find girlfriend", "relationship", "once", 0);
add_todo("comics", "buy", "weekly", 7);
add_todo("car tires", "car", "once", 0);
add_todo("wiper fluid", "car", "once", 0);
add_todo("read skydiving manual", "hobby", "once", 0);
add_todo("skydiving A-License", "hobby", "once", 0);
add_todo("skydiving B-License", "hobby", "once", 0);
add_todo("exterminate car ants", "car", "once", 0);
add_todo("exterminate truck ants", "car", "once", 0);
add_todo("run marathon", "hobby", "once", 0);
add_todo("write novel", "hobby", "once", 0);
add_todo("write how-to", "hobby", "once", 0);
add_todo("invest", "money", "monthly", 30);
add_todo("tithe account", "money", "once", 0);
add_todo("groom", "chore", "weekly", 7);
add_todo("laundry", "chore", "batch", 1);
add_todo("empty car trunk", "car", "once", 0);
add_todo("fix windshield chip", "car", "once", 0);
add_todo("dad letter to Kathleen", "relationship", "once", 0);
add_todo("Kathleen apologize to Teddy", "relationship", "once", 0);
add_todo("clean table", "chore", "once", 0);
add_todo("organize room", "chore", "batch", 1);
add_todo("move room", "house", "once", 0);
add_todo("paint house", "house", "once", 0);
add_todo("clean dishes", "chore", "batch", 1);
add_todo("trash", "chore", "batch", 1);

// call after adding todos
add_select_options();
renew();

// order by duration
function order_by_days() {
	todo_list_arr.sort((a, b) => (a.days > b.days) ? 1 : (a.days === b.days) ? (a.priority > b.priority) ? 1 : -1 : -1);
};

// order by category
function order_by_priority() {
	todo_list_arr.sort((a, b) => (a.priority > b.priority) ? 1 : (a.priority === b.priority) ? (a.days > b.days) ? 1 : -1 : -1);
};

// create table
let table = document.createElement("table");
table.id = "todo-table"
document.body.appendChild(table);

// create table title
let table_caption = document.createElement("caption");
table_caption.innerHTML = "TO-DO (count: " + count.toString() + ")";
table.appendChild(table_caption);

// create table head
let table_head = document.createElement("thead");
table.appendChild(table_head);

// create column headers
let header_row = document.createElement("tr");
table_head.appendChild(header_row);

let header_cell_first = document.createElement("th");
header_cell_first.id = "first-header-cell";
header_cell_first.innerHTML = "Duration";
header_row.appendChild(header_cell_first);

let header_cell_second = document.createElement("th");
header_cell_second.id = "second-header-cell";
header_cell_second.innerHTML = "Category";
header_row.appendChild(header_cell_second);

let header_cell_name = document.createElement("th");
header_cell_name.innerHTML = "Task";
header_row.appendChild(header_cell_name);

let header_cell_complete = document.createElement("th");
header_cell_complete.innerHTML = "Complete";
header_row.appendChild(header_cell_complete);

// create table body
let table_body = document.createElement("tbody");
table.appendChild(table_body);

// add cell
function append_cell_to_row(row_el, str) {
	let new_cell = document.createElement("td");
	new_cell.setAttribute("data-value", str);
  new_cell.innerHTML = str;
  row_el.appendChild(new_cell);
};

function toggle_complete_todo(this_button) {
	console.log(this_button)
	let cell_el = this_button.parentElement;
	let row_el = cell_el.parentElement;
	let todo_obj = todo_list_arr[row_el.dataset.index];

	// if did
	if (todo_obj.complete) {
		todo_obj.complete = 0;
		this_button.innerHTML = "done";
		cell_el.setAttribute("data-value", "0");
		row_el.style.display = incomplete_display_value;
		count++;
		table_caption.innerHTML = "TO-DO (count: " + count.toString() + ")";
	} else {
	// if not did
		todo_obj.complete = 1;
		this_button.innerHTML = "undo";
		cell_el.setAttribute("data-value", "1");
		row_el.style.display = completed_display_value;
		count--;
		table_caption.innerHTML = "TO-DO (count: " + count.toString() + ")";
	};

	localStorage.complete_str = localStorage.complete_str.slice(0, todo_obj.index) + todo_obj.complete.toString() + localStorage.complete_str.slice(todo_obj.index + 1);
};

let tally = 0;

// add row
function append_row_to_table_body(todo_obj, order_by_str) {
  let row_todo = document.createElement("tr");
  row_todo.id = todo_obj.name;
  row_todo.setAttribute("data-index", todo_list_arr.indexOf(todo_obj).toString());
  row_todo.setAttribute("data-name", todo_obj.name);
  row_todo.setAttribute("data-category", todo_obj.category);
  row_todo.setAttribute("data-priority", todo_obj.priority.toString());
  row_todo.setAttribute("data-duration", todo_obj.duration);
  row_todo.setAttribute("data-days", todo_obj.days.toString());
  table_body.appendChild(row_todo);

  // add cells duration and category
  if (order_by_str == "days") {
  	header_cell_first.innerHTML = "Duration";
  	header_cell_second.innerHTML = "Category";
  	append_cell_to_row(row_todo, todo_obj.duration);
  	append_cell_to_row(row_todo, todo_obj.category);
  };

  if (order_by_str == "priority") {
  	header_cell_first.innerHTML = "Category";
  	header_cell_second.innerHTML = "Duration";
  	append_cell_to_row(row_todo, todo_obj.category);
  	append_cell_to_row(row_todo, todo_obj.duration);
  };

  // add cell task
	append_cell_to_row(row_todo, todo_obj.name);

	// add cell complete
	append_cell_to_row(row_todo, todo_obj.complete.toString());
	row_todo.lastChild.innerHTML = "";

	// add button
	let new_button = document.createElement("button");
	new_button.innerHTML = todo_obj.complete ? "undo" : "done";
	new_button.setAttribute("onclick", "toggle_complete_todo(this);");
	row_todo.lastChild.appendChild(new_button);
	row_todo.className = todo_obj.complete ? "complete" : "";
};

// fill table
function append_todo_list_arr_to_table(order_by_str) {
	tally++;
	console.log("tally: " + tally)

	
	let filtered_arr = filter();
	for (let todo_obj of filtered_arr) append_row_to_table_body(todo_obj, order_by_str);
};

// create original table
order_by_days();
append_todo_list_arr_to_table("days");

// clear rows for new table
const remove_table_rows = () => table_body.querySelectorAll('*').forEach(child => child.remove());

// function for order_toggle_button 
function toggle_order() {
	// clear table body
	remove_table_rows();

	// flip str
	new_order_by_str = new_order_by_str == "priority" ? "days" : "priority";

  if (new_order_by_str == "priority") {
  	order_by_priority();
  	order_toggle_button.innerHTML = "Order by Duration";
  } else if (new_order_by_str == "days") {
  	order_by_days();
  	order_toggle_button.innerHTML = "Order by Category";
  };

  // new table body
  append_todo_list_arr_to_table(new_order_by_str);

  // hide/display completed todos
  add_row_display_props(); 
};

// add display props to rows
function add_row_display_props() {
	for (let row of table_body.getElementsByTagName('tr')) {
		row.style.display = incomplete_display_value;
  };

	for (let row of table_body.getElementsByClassName('complete')) {
		row.style.display = completed_display_value;
  };
};

// function for completed_toggle_button
function toggle_completed() {

	// flip button text
	completed_toggle_button.innerHTML = completed_toggle_button.innerHTML == "Display Completed" ? "Display Incomplete" : "Display Completed";

	// flip variables
  incomplete_display_value = incomplete_display_value == "none" ? "table-row" : "none";
	completed_display_value = completed_display_value == "table-row" ? "none" : "table-row";

	// apply new display props
	add_row_display_props(); 
};

// filter todo_list_arr by selected options
function filter() {
	let filtered_arr = todo_list_arr;

	let filter_obj = {};

	// add filter keys and values
	if (filter_duration.value !== "") filter_obj.days = Number(filter_duration.value);
	if (filter_category.value !== "") filter_obj.priority = category_arr.indexOf(filter_category.value);

	// actually filter
  for (let key in filter_obj)	filtered_arr = filtered_arr.filter(todo => todo[key] == filter_obj[key]);

	// change list order
  if (new_order_by_str == "days") {
  	// sort by days
  	filtered_arr.sort((a, b) => (Number(a.days) > Number(b.days)) ? 1 : (Number(a.days) === Number(b.days)) ? ((Number(a.priority) > Number(b.priority)) ? 1 : -1) : -1 );
  } else if (new_order_by_str == "priority") {
  	// sort by priority
  	filtered_arr.sort((a, b) => (Number(a.priority) > Number(b.priority)) ? 1 : (Number(a.priority) === Number(b.priority)) ? ((Number(a.days) > Number(b.days)) ? 1 : -1) : -1 );
  };

  return filtered_arr;
};

// function for filtered table body
function append_filtered_arr_to_table() {
	remove_table_rows();
	append_todo_list_arr_to_table(new_order_by_str);
	add_row_display_props(); 
};










