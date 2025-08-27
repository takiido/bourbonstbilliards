import styles from "./Button.module.scss";

type ButtonProps = {
    text?: string;
    type?: "primary" | "secondary" | "accent";
    onClick: () => void;
    disabled: boolean;
    icon?: React.ReactNode;
}

const Button = ({
    text,
    type = "primary",
    onClick,
    disabled,
    icon,
}: ButtonProps) => {
    return (
        <button
            className={`
                ${styles.button} 
                ${styles[`button--${type}`]}
                ${icon && !text && styles['button--icon']}
                `}
            onClick={onClick}
            disabled={disabled}
        >
            {icon}
            {text}
        </button>
    )
}

export default Button;