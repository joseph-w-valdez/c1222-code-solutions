var $submit = document.querySelector('#contact-form');
$submit.addEventListener('submit', handleSubmission);

function handleSubmission(event) {
  event.preventDefault();
  var submission = {};
  submission.name = $submit.elements.name.value;
  submission.email = $submit.elements.email.value;
  submission.message = $submit.elements.message.value;
  console.log(submission);
  $submit.reset();
}
