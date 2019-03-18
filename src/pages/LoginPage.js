import React, { Component } from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";

import FormRow from "../components/FormRow";
export default class LoginPage extends Component {
    render() {
        return (
            <View>
                <Text style={styles.inputLabel}>E-mail</Text>
                <FormRow>
                    <TextInput
                        style={styles.input}
                        placeholder="user@email.com"
                    />
                </FormRow>
                <Text style={styles.inputLabel}>Senha</Text>
                <FormRow>
                    <TextInput
                        style={styles.input}
                        placeholder="******"
                        secureTextEntry={true}
                    />
                </FormRow>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 10
    },
    inputLabel: {
        marginLeft: 10,
        marginTop: 5
    }
});
