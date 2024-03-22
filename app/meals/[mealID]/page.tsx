import { ReactElement } from "react";

const MealDetails = ({ params }: { params: any }): ReactElement => {
    return <div><h2>MealsDetails in testing {params?.mealID}</h2></div>
}

export default MealDetails;