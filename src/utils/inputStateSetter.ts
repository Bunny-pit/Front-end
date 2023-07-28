export const onChangeInputSetter = (setter: React.Dispatch<React.SetStateAction<string>>) =>
(e: React.ChangeEvent<HTMLInputElement>) => {
    setter(e.target.value);
};