import React from "react";
import { StyleSheet, View } from "react-native";

const FormRow = props => {
    const { children } = props;
    return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
    container: {
        padding: 5,
        backgroundColor: "white",
        margin: 10,
        elevation: 1
    }
});

export default FormRow;
