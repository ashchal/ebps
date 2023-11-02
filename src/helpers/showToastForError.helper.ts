import Toast from 'react-native-simple-toast';

const showToastForError = (error: any) => {
  Toast.show(error.response.data.data.message, 3);
};

export {showToastForError};
