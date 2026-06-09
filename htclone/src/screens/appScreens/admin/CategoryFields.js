import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Switch,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

const CategoryFields = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { category, name } = route.params || {};

  const [fields, setFields] = useState([
    {
      id: 1,
      name: 'Make',
      type: 'Text',
      required: true,
    },
  ]);

  const updateFieldType = (id, type) => {
    const updated = fields.map(item =>
      item.id === id ? { ...item, type } : item
    );
    setFields(updated);
  };

  const toggleRequired = (id) => {
    const updated = fields.map(item =>
      item.id === id ? { ...item, required: !item.required } : item
    );
    setFields(updated);
  };

  return (
    <SafeAreaView style={styles.container}>

      {/* Header */}
        <View style={styles.headerContainer}>
          <View style={styles.header}>
  
            <TouchableOpacity
              style={styles.backRow}
              onPress={() => navigation.goBack()}
            >
              <Icon name="chevron-left" size={22} color="#16A34A" />
              <Text style={styles.backText}>Back</Text>
            </TouchableOpacity>
  
            <Text style={styles.headerTitle}>Category fields</Text>
  
            <View style={{ width: 60 }} />
          </View>
  
          <View style={styles.divider} />
        </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>

        {/* Step */}
        <View style={styles.stepBox}>
          <Text style={styles.stepText}>Step 2 of 2 · Fields</Text>
        </View>

        {/* Category box */}
        <View style={styles.categoryBox}>
          <Text style={styles.label}>Category</Text>
          <Text style={styles.categoryName}>{category?.name || name}</Text>
          <Text style={styles.subText}>Editing an existing category.</Text>
        </View>

        <Text style={styles.info}>
          Add the inputs sellers see when they list items.The first field should stay Make (required). Tap a type chip below-no tall picker.Use Select when answers must come from a fied list.
        </Text>

        {/* Fields */}
        {fields.map((field) => (
          <View key={field.id} style={styles.card}>

            <Text style={styles.fieldTitle}>Field 1</Text>

            {/* Field name */}
            <Text style={styles.label}>Field name *</Text>
            <TextInput
              value={field.name}
              style={styles.input}
              onChangeText={(text) => {
                const updated = fields.map(f =>
                  f.id === field.id ? { ...f, name: text } : f
                );
                setFields(updated);
              }}
            />

            {/* Field type */}
            <Text style={styles.label}>Field type</Text>

            <View style={styles.row}>
              {['Text', 'Number', 'Select', 'Long text'].map((type) => (
                <TouchableOpacity
                  key={type}
                  style={[
                    styles.chip,
                    field.type === type && styles.chipActive,
                  ]}
                  onPress={() => updateFieldType(field.id, type)}
                >
                  <Text
                    style={[
                      styles.chipText,
                      field.type === type && styles.chipTextActive,
                    ]}
                  >
                    {type}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <View  >
              <Text style={styles.paragraph}>
                Tap a chip-no scrolling list.Long text = paragraphs;Select= dropdown of options.  
              </Text>
              <View style={styles.divider} />
            </View>

            {/* Required */}
            <View style={styles.switchRow}>
              <Text style={styles.requiredText}>Required</Text>

              <Switch
                value={field.required}
                onValueChange={() => toggleRequired(field.id)}
              />
            </View>

            <Text style={styles.helper}>
              Must be filled when creating a lot
            </Text>

            {/* Remove */}
            <TouchableOpacity style={styles.button}
              onPress={() => navigation.navigate('CategoryFields', {
                category: category,
                name: name,
              })}
              >
              <Icon name="trash-2" size={18} color="#DC2626" />
              <Text style={styles.buttonText}>Remove field</Text>
            </TouchableOpacity>

          </View>
        ))}

        {fields.map((field) => (
          <View key={field.id} style={styles.card}>

            <Text style={styles.fieldTitle}>Field 2</Text>

            {/* Field name */}
            <Text style={styles.label}>Field name *</Text>
            <TextInput
              value={field.name}
              style={styles.input}
              onChangeText={(text) => {
                const updated = fields.map(f =>
                  f.id === field.id ? { ...f, name: text } : f
                );
                setFields(updated);
              }}
            />

            {/* Field type */}
            <Text style={styles.label}>Field type</Text>

            <View style={styles.row}>
              {['Text', 'Number', 'Select', 'Long text'].map((type) => (
                <TouchableOpacity
                  key={type}
                  style={[
                    styles.chip,
                    field.type === type && styles.chipActive,
                  ]}
                  onPress={() => updateFieldType(field.id, type)}
                >
                  <Text
                    style={[
                      styles.chipText,
                      field.type === type && styles.chipTextActive,
                    ]}
                  >
                    {type}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <View  >
              <Text style={styles.paragraph}>
                Tap a chip-no scrolling list.Long text = paragraphs;Select= dropdown of options.  
              </Text>
              <View style={styles.divider} />
            </View>

            {/* Required */}
            <View style={styles.switchRow}>
              <Text style={styles.requiredText}>Required</Text>

              <Switch
                value={field.required}
                onValueChange={() => toggleRequired(field.id)}
              />
            </View>

            <Text style={styles.helper}>
              Must be filled when creating a lot
            </Text>

            {/* Remove */}
            <TouchableOpacity style={styles.button}
              onPress={() => navigation.navigate('CategoryFields', {
                category: category,
                name: name,
              })}
              >
              <Icon name="trash-2" size={18} color="#DC2626" />
              <Text style={styles.buttonText}>Remove field</Text>
            </TouchableOpacity>

          </View>
        ))}

        {fields.map((field) => (
          <View key={field.id} style={styles.card}>

            <Text style={styles.fieldTitle}>Field 3</Text>

            {/* Field name */}
            <Text style={styles.label}>Field name *</Text>
            <TextInput
              value={field.name}
              style={styles.input}
              onChangeText={(text) => {
                const updated = fields.map(f =>
                  f.id === field.id ? { ...f, name: text } : f
                );
                setFields(updated);
              }}
            />

            {/* Field type */}
            <Text style={styles.label}>Field type</Text>

            <View style={styles.row}>
              {['Text', 'Number', 'Select', 'Long text'].map((type) => (
                <TouchableOpacity
                  key={type}
                  style={[
                    styles.chip,
                    field.type === type && styles.chipActive,
                  ]}
                  onPress={() => updateFieldType(field.id, type)}
                >
                  <Text
                    style={[
                      styles.chipText,
                      field.type === type && styles.chipTextActive,
                    ]}
                  >
                    {type}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <View  >
              <Text style={styles.paragraph}>
                Tap a chip-no scrolling list.Long text = paragraphs;Select= dropdown of options.  
              </Text>
              <View style={styles.divider} />
            </View>

            {/* Required */}
            <View style={styles.switchRow}>
              <Text style={styles.requiredText}>Required</Text>

              <Switch
                value={field.required}
                onValueChange={() => toggleRequired(field.id)}
              />
            </View>

            <Text style={styles.helper}>
              Must be filled when creating a lot
            </Text>

            {/* Remove */}
            <TouchableOpacity style={styles.button}
              onPress={() => navigation.navigate('CategoryFields', {
                category: category,
                name: name,
              })}
              >
              <Icon name="trash-2" size={18} color="#DC2626" />
              <Text style={styles.buttonText}>Remove field</Text>
            </TouchableOpacity>

          </View>
        ))}

        {/* bid increments */}
        {fields.map((field) => (
          <View key={field.id} style={styles.card}>

            <Text style={styles.fieldTitle}>Bid increments (optional)</Text>

            <View  >
              <Text style={styles.paragraph}>
                Minimum bid step size during live biddin for lots in this category.
              </Text>
              <View style={styles.divider} />
            </View>

            {/* Required */}
            <View style={styles.switchRow1}>
              <Text style={styles.requiredText}>Up to amount</Text>
            </View>

             <TextInput
              value={field.name}
              style={styles.input}
              onChangeText={(text) => {
                const updated = fields.map(f =>
                  f.id === field.id ? { ...f, name: text } : f
                );
                setFields(updated);
              }}
            />

             <Text style={styles.requiredText}>Up to amount</Text>

             <TextInput
              value={field.name}
              style={styles.input}
              onChangeText={(text) => {
                const updated = fields.map(f =>
                  f.id === field.id ? { ...f, name: text } : f
                );
                setFields(updated);
              }}
            />
          </View>
        ))}

        {/* Button */}
        <TouchableOpacity style={styles.savebutton}>
          <Text style={styles.savebuttonText}>Save category</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
};

export default CategoryFields;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6F8',
  },
   headerContainer: {
    backgroundColor: "#fff",
    paddingTop: 36,
    paddingHorizontal: 15,
    elevation: 3,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  backRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  backText: {
    color: "#16A34A",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 4,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111827",
  },

  divider: {
    height: 0.5,
    backgroundColor: "#D1D5DB",
    marginTop: 12,
  },

  back: {
    color: '#16A34A',
    fontSize: 16,
  },

  title: {
    fontSize: 18,
    fontWeight: '700',
  },

  stepBox: {
    margin: 15,
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: '#16A34A',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },

  stepText: {
    color: '#16A34A',
    fontSize: 12,
  },

  categoryBox: {
    borderWidth: 1,
    borderColor: '#dbd8d8',
    backgroundColor: '#fff',
    marginHorizontal: 15,
    padding: 15,
    borderRadius: 10,
  },

  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
  },

  categoryName: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 4,
  },

  subText: {
    color: '#888',
    marginTop: 4,
  },

  info: {
    fontSize: 16,
    margin: 15,
    color: '#666',
  },

  card: {
    borderWidth: 1,
    borderColor: '#dbd8d8',
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginBottom: 15,
    padding: 15,
    borderRadius: 12,
  },

  fieldTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 12,
  },

  input: {
    borderWidth: 1,
    marginTop: 6,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },

  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 6,
  },

    divider: {
    height: 0.5,
    backgroundColor: "#D1D5DB",
    marginTop: 12,
  },

  chip: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 6,
    marginTop: 5,
    color: 'black',
  },

  chipActive: {
    backgroundColor: '#c5ecda',
    borderColor: '#16A34A',
  },

  chipText: {
    fontSize: 12,
    color: '#333',
  },

  chipTextActive: {
    color: '#141313',
  },

  switchRow1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    alignItems: 'center',
  },

  requiredText: {
    fontWeight: '600',
    color: '#888',
  },

  helper: {
    fontSize: 15,
    color: '#888',
    marginTop: 5,
    marginBottom: 10,
  },

  paragraph: {
    fontSize: 16,
    color: '#555',
    marginTop: 13,
  },

  button: {
    width: "98%",
    height: 46,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#DC2626",
    backgroundColor: "#FFF5F5",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 7,
  },
  

  buttonText: {
    color: '#f10b0b',
    fontWeight: '600',
    fontSize: 16,
    borderwidth: 1,
    borderColor: '#DC2626',
  },

    savebutton: {
    backgroundColor: '#40a83d',
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 6,
    marginHorizontal: 16,
    alignItems: 'center',
  },

  savebuttonText: {
    color: '#0c0c0c',
    fontWeight: '600',
    fontSize: 17,
  },
});