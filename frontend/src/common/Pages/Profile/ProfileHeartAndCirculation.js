import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Grid, Typography, Box } from '@material-ui/core';
import RadioGroup from '../../Components/RadioGroup';
import Button from '../../Components/Button';
import texts from '../../../resources/texts';

export default ({ history }) => {
  const { handleSubmit, control, errors, watch } = useForm();
  const [addButton, setAddButton] = useState(false);
  const [open, setOpen] = useState(false);
  const onSubmit = data => {
    // submit action()
    history.replace('/profile/other');
  };
  const [valid, setValid] = useState(false);
  const watchedValues = watch();

  useEffect(() => {
    const keys = Object.keys(watchedValues);
    if (keys.length !== 0 && keys.every((k) => !!watchedValues[k])) {
      setValid(true);
    }
  }, [watchedValues]);

  useEffect(() => {
    if (watchedValues.problemsWithHeart === 'yes')
      return setAddButton(true);
    return setAddButton(false);
  }, [watchedValues.problemsWithHeart]);
  const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  return (
    <>
      <form id="profile-terms" onSubmit={handleSubmit(onSubmit)}>
        <Grid container direction="column" spacing={1} justify="space-around">
          <Grid item xs={12}>
            <Box mt={2}>
              <Typography align="center" variant="h4" component="h2">
                <Box fontWeight="fontWeightMedium">Profile Name</Box>
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box ml={2}>
              <Typography align="left" variant="h5" component="h3">
                <Box fontWeight="fontWeightMedium">
                  {texts.PROFILE_HEART_TITLE}
                </Box>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box ml={2}>
              <Typography align="left" variant="body1" component="h4">
                {texts.PROFILE_HEART_SUBTITLE}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box style={{ width: '100%' }}>
              <RadioGroup
                control={control}
                errors={errors}
                options={texts.PROFILE_HEART_RADIO.slice(0, 1)}
              />
              {addButton
                && (
                  <Box m={2}>
                    <Button
                      color="secondary"
                      variant="contained"
                      onClick={handleOpen}
                      width={200}
                      size='small'
                    >{texts.BUTTON_ADD_PROBLEM}</Button>
                  </Box>
                )}
              <RadioGroup
                control={control}
                errors={errors}
                options={texts.PROFILE_HEART_RADIO.slice(1)}
              />
            </Box>
          </Grid>
          <Grid item width="100%">
            <Grid align="center">
              <Button
                color="success"
                variant="contained"
                type="submit"
                form="profile-terms"
                disabled={!valid}
                width={300}
              >
                {texts.BUTTON_CONTINUE}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </>
  );
};
