import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Typography, Grid, Box } from '@material-ui/core';
import texts from '../../../resources/texts';
import Button from '../../Components/Button';
import CreateProfileForm from './CreateProfileForm';

export default ({ matches, handleCreateProfile }) => {
  const { errors, register, handleSubmit, setValue, unregister, noNhsNo, watch } = useForm();
  const [valid, setValid] = useState(false);
  const watchedValues = watch();

  useEffect(() => {
    const keys = Object.keys(watchedValues);
    if (keys.length !== 0 && keys.every((k) => !!watchedValues[k])) {
      setValid(true);
    }
  }, [watchedValues]);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography align="center" variant="h3" component="h2">
          <Box
            fontWeight="fontWeightMedium"
            {...(matches ? { mt: 2 } : { mt: 1 })}
          >
            {texts.CREATE_PROFILE_TITLE}
          </Box>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <CreateProfileForm
          noNhsNo={noNhsNo}
          errors={errors}
          register={register}
          handleSubmit={handleSubmit}
          setValue={setValue}
          unregister={unregister}
          handleCreateProfile={handleCreateProfile}
        />
      </Grid>
      <Grid item xs={12}>
        <Box>
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <Button
                width={300}
                color="success"
                variant="contained"
                type="submit"
                form="create-profile"
                disabled={!valid}
              >
                {texts.BUTTON_CONFIRM}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};
