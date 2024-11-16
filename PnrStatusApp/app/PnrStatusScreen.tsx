import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { fetchPnrStatus } from '../constants/fetchPnrStatus';

// Define an interface for the expected PNR data
interface PnrStatusData {
  pnrNumber: string;
  dateOfJourney: string;
  trainNumber: string;
  trainName: string;
  // Add other properties as needed
}

export default function PnrStatusScreen() {
  const [pnrNumber, setPnrNumber] = useState<string>('');
  const [pnrData, setPnrData] = useState<PnrStatusData | null>(null);
  const [error, setError] = useState<string>('');

  const handleFetchPnr = async () => {
    if (!pnrNumber) {
      setError('Please enter a PNR number');
      return;
    }

    try {
      const data = await fetchPnrStatus(pnrNumber);
      if (data) {
        setPnrData(data);
        setError('');
      } else {
        setError('Failed to retrieve PNR status. Please try again.');
      }
    } catch (error) {
      setError('Failed to retrieve PNR status. Please try again.');
      console.error(error); // Log the error for debugging
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>PNR Status Checker</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter PNR Number"
        value={pnrNumber}
        onChangeText={setPnrNumber}
        keyboardType="numeric"
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Button title="Check PNR Status" onPress={handleFetchPnr} />
      {pnrData && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>PNR Number: {pnrData.pnrNumber}</Text>
          <Text style={styles.resultText}>Date of Journey: {pnrData.dateOfJourney}</Text>
          <Text style={styles.resultText}>Train Number: {pnrData.trainNumber}</Text>
          <Text style={styles.resultText}>Train Name: {pnrData.trainName}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  resultContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  resultText: {
    fontSize: 16,
    marginBottom: 5,
  },
});
