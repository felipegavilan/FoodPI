export default function validate(data) {
  let errors = {};

  if (!data.title) {
    errors.title = "Please complete the title";
  } 
  if (!data.summary) {
    errors.summary = "Please complete the summary";
  }
  if (!data.steps?.length) {
    errors.steps = "Please complete steps";
  }
  if (!data.image?.length) errors.image = "Copy image url";

  if (!data.healthScore || data.healthScore < 0 || data.healthScore > 100) {
    errors.healthScore = "Please complete Health Score";
  }
  if (errors.diets?.length === 0) {
    errors.diets = "Check one or more";
  }

  return errors;
}
