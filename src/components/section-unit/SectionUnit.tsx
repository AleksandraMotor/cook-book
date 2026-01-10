import { ReactNode } from "react";

import './SectionUnit.scss';
import classNames from "classnames";

interface SectionUnitProps {
    children: ReactNode;
    rows?: number;
}

const SectionUnit: React.FC<SectionUnitProps> = ({children, rows}) => {

    const columns = rows ? "section-unit--columns" : "";
    return (
        <section className={classNames("section-unit", columns)}>
            {children}
        </section>
    );
};

export default SectionUnit;