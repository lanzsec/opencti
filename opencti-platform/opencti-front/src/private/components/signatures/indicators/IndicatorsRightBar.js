import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import { compose } from 'ramda';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Drawer from '@material-ui/core/Drawer';
import inject18n from '../../../../components/i18n';

const styles = (theme) => ({
  drawerPaper: {
    minHeight: '100vh',
    width: 250,
    padding: '0 0 20px 0',
    position: 'fixed',
    backgroundColor: theme.palette.navAlt.background,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  listIcon: {
    marginRight: 0,
  },
  item: {
    padding: '0 0 0 10px',
  },
  itemField: {
    padding: '0 15px 0 15px',
  },
  toolbar: theme.mixins.toolbar,
});

class IndicatorsRightBar extends Component {
  render() {
    const {
      classes,
      t,
      indicatorTypes,
      observableTypes,
      handleToggleIndicatorType,
      handleToggleObservableType,
    } = this.props;
    return (
      <Drawer
        variant="permanent"
        anchor="right"
        classes={{ paper: classes.drawerPaper }}
      >
        <div className={classes.toolbar} />
        <List
          subheader={
            <ListSubheader component="div">{t('Indicator type')}</ListSubheader>
          }
        >
          <ListItem
            dense={true}
            button={true}
            onClick={handleToggleIndicatorType.bind(this, 'stix')}
            classes={{ root: classes.item }}
          >
            <Checkbox
              checked={indicatorTypes.includes('stix')}
              disableRipple={true}
            />
            <ListItemText primary="STIX" />
          </ListItem>
          <ListItem
            dense={true}
            button={true}
            onClick={handleToggleIndicatorType.bind(this, 'pcre')}
            classes={{ root: classes.item }}
          >
            <Checkbox
              checked={indicatorTypes.includes('pcre')}
              disableRipple={true}
            />
            <ListItemText primary="PCRE" />
          </ListItem>
          <ListItem
            dense={true}
            button={true}
            onClick={handleToggleIndicatorType.bind(this, 'sigma')}
            classes={{ root: classes.item }}
          >
            <Checkbox
              checked={indicatorTypes.includes('sigma')}
              disableRipple={true}
            />
            <ListItemText primary="SIGMA" />
          </ListItem>
          <ListItem
            dense={true}
            button={true}
            onClick={handleToggleIndicatorType.bind(this, 'snort')}
            classes={{ root: classes.item }}
          >
            <Checkbox
              checked={indicatorTypes.includes('snort')}
              disableRipple={true}
            />
            <ListItemText primary="SNORT" />
          </ListItem>
          <ListItem
            dense={true}
            button={true}
            onClick={handleToggleIndicatorType.bind(this, 'suricata')}
            classes={{ root: classes.item }}
          >
            <Checkbox
              checked={indicatorTypes.includes('suricata')}
              disableRipple={true}
            />
            <ListItemText primary="Suricata" />
          </ListItem>
          <ListItem
            dense={true}
            button={true}
            onClick={handleToggleIndicatorType.bind(this, 'yara')}
            classes={{ root: classes.item }}
          >
            <Checkbox
              checked={indicatorTypes.includes('yara')}
              disableRipple={true}
            />
            <ListItemText primary="YARA" />
          </ListItem>
        </List>
        <List
          subheader={
            <ListSubheader component="div">
              {t('Main observable type')}
            </ListSubheader>
          }
        >
          <ListItem
            dense={true}
            button={true}
            onClick={handleToggleObservableType.bind(this, 'Autonomous-System')}
            classes={{ root: classes.item }}
          >
            <Checkbox
              checked={observableTypes.includes('Autonomous-System')}
              disableRipple={true}
            />
            <ListItemText primary={t('Autonomous systems')} />
          </ListItem>
          <ListItem
            dense={true}
            button={true}
            onClick={handleToggleObservableType.bind(this, 'Domain')}
            classes={{ root: classes.item }}
          >
            <Checkbox
              checked={observableTypes.includes('Domain')}
              disableRipple={true}
            />
            <ListItemText primary={t('Domain names')} />
          </ListItem>
          <ListItem
            dense={true}
            button={true}
            onClick={handleToggleObservableType.bind(this, 'IPv4-Addr')}
            classes={{ root: classes.item }}
          >
            <Checkbox
              checked={observableTypes.includes('IPv4-Addr')}
              disableRipple={true}
            />
            <ListItemText primary={t('IPv4 addresses')} />
          </ListItem>
          <ListItem
            dense={true}
            button={true}
            onClick={handleToggleObservableType.bind(this, 'IPv6-Addr')}
            classes={{ root: classes.item }}
          >
            <Checkbox
              checked={observableTypes.includes('IPv6-Addr')}
              disableRipple={true}
            />
            <ListItemText primary={t('IPv6 addresses')} />
          </ListItem>
          <ListItem
            dense={true}
            button={true}
            onClick={handleToggleObservableType.bind(this, 'URL')}
            classes={{ root: classes.item }}
          >
            <Checkbox
              checked={observableTypes.includes('URL')}
              disableRipple={true}
            />
            <ListItemText primary={t('URL')} />
          </ListItem>
          <ListItem
            dense={true}
            button={true}
            onClick={handleToggleObservableType.bind(this, 'Email*')}
            classes={{ root: classes.item }}
          >
            <Checkbox
              checked={observableTypes.includes('Email*')}
              disableRipple={true}
            />
            <ListItemText primary={t('Emails')} />
          </ListItem>
          <ListItem
            dense={true}
            button={true}
            onClick={handleToggleObservableType.bind(this, 'Mutex')}
            classes={{ root: classes.item }}
          >
            <Checkbox
              checked={observableTypes.includes('Mutex')}
              disableRipple={true}
            />
            <ListItemText primary={t('Mutex')} />
          </ListItem>
          <ListItem
            dense={true}
            button={true}
            onClick={handleToggleObservableType.bind(this, 'File*')}
            classes={{ root: classes.item }}
          >
            <Checkbox
              checked={observableTypes.includes('File*')}
              disableRipple={true}
            />
            <ListItemText primary={t('Files')} />
          </ListItem>
          <ListItem
            dense={true}
            button={true}
            onClick={handleToggleObservableType.bind(this, 'Registry-Key*')}
            classes={{ root: classes.item }}
          >
            <Checkbox
              checked={observableTypes.includes('Registry-Key*')}
              disableRipple={true}
            />
            <ListItemText primary={t('Registry')} />
          </ListItem>
          <ListItem
            dense={true}
            button={true}
            onClick={handleToggleObservableType.bind(this, 'PDB-Path')}
            classes={{ root: classes.item }}
          >
            <Checkbox
              checked={observableTypes.includes('PDB-Path')}
              disableRipple={true}
            />
            <ListItemText primary={t('PDB Path')} />
          </ListItem>
          <ListItem
            dense={true}
            button={true}
            onClick={handleToggleObservableType.bind(this, 'Windows-Service')}
            classes={{ root: classes.item }}
          >
            <Checkbox
              checked={observableTypes.includes('Windows-Service')}
              disableRipple={true}
            />
            <ListItemText primary={t('Windows services')} />
          </ListItem>
          <ListItem
            dense={true}
            button={true}
            onClick={handleToggleObservableType.bind(
              this,
              'Windows-Scheduled-Task',
            )}
            classes={{ root: classes.item }}
          >
            <Checkbox
              checked={observableTypes.includes('Windows-Scheduled-Task')}
              disableRipple={true}
            />
            <ListItemText primary={t('Windows scheduled tasks')} />
          </ListItem>
          <ListItem
            dense={true}
            button={true}
            onClick={handleToggleObservableType.bind(this, 'X509-Certificate')}
            classes={{ root: classes.item }}
          >
            <Checkbox
              checked={observableTypes.includes('X509-Certificate')}
              disableRipple={true}
            />
            <ListItemText primary={t('X509 Certificates')} />
          </ListItem>
        </List>
      </Drawer>
    );
  }
}

IndicatorsRightBar.propTypes = {
  observableTypes: PropTypes.array,
  handleToggleIndicatorType: PropTypes.func,
  handleToggleObservableType: PropTypes.func,
  classes: PropTypes.object,
  t: PropTypes.func,
};

export default compose(inject18n, withStyles(styles))(IndicatorsRightBar);
