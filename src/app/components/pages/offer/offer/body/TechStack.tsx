import Card from "app/components/common/card/Card";

export interface TechStackProps {

}

const TechStack: React.FC<TechStackProps> = () => {
    return (
        <Card>
            <p>Tech stack</p>
            <p>Soy un body</p>
        </Card>
    );
}

export default TechStack;