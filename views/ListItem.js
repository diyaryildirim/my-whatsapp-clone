import React from "react";
import { View, Text, Image } from "react-native";

import styles from "../styles/appStyle";

const ListItem = ({image, title, desc, date}) =>{
    return (
        <View style={styles.ListItem}>
            <View style={styles.listRow}>
                <Image
                    source={image}
                    resizeMode="cover"
                    style={styles.listImage}
                ></Image>
                <View style={styles.listData}>
                    <Text style={styles.listTitle}>{title}</Text>
                    <Text style={styles.listDesc}>{desc}</Text>
                </View>
                <Text style={styles.listDate}>{date}</Text>
            </View>

        </View>
    );
};

export default ListItem;