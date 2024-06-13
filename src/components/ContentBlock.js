import FinancialBlock from "./FinancialBlock";
import ListStudents from "./ListStudents";
import ListTasks from "./ListTasks";
import Schedule from "./Schedule";

function ContentBlock() {
    return ( <section className="content">
        <div className="content__left">
            <ListStudents />
            <FinancialBlock />
        </div>
        <div className="content__right">
            <Schedule />
            <ListTasks />
        </div>
        
    </section> );
}

export default ContentBlock;