export const validate = (data) =>{

    let errors = {}

   if (!data.title) errors.title = 'Title invalidated';
//    if (data.title.length > 3) errors.title = 'Must contain more than 3 characters';

//    if (!data.summary) errors.summary = 'Summary invalidated';
//    if (data.summary.length > 10) errors.summary = 'Must contain more than 10 characters';

// //    if (data.steps[0].length > 10) errors.steps = 'Must contain more than 10 characters';

//    if (!data.image) errors.image = 'Empty';
// //    if (!new URL(data.image)) errors.image = 'Invalidated URL';

//    if (!data.healthScore) errors.healthScore = 'Empty';
//    if (data.healthScore > 100) errors.healthScore = '0 - 100';

//    if (data.diets.length) errors.diets = 'select one or more';


   

    return errors
}