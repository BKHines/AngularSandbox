import { Injectable } from '@angular/core';
import { CommonfunctionsService } from '../common/commonfunctions.service';

@Injectable()
export class ShareddataService {
  episodes = [
    { id: 'livepd_1', showname: 'Live PD', episodename: '10/28/2016', season: 1, overall: 1, episode: 1, airdate: '10/28/2016', notes: [''], watched: false },
    { id: 'livepd_2', showname: 'Live PD', episodename: '11/04/2016', season: 1, overall: 2, episode: 2, airdate: '11/04/2016', notes: [''], watched: false },
    { id: 'livepd_3', showname: 'Live PD', episodename: '11/11/2016', season: 1, overall: 3, episode: 3, airdate: '11/11/2016', notes: [''], watched: false },
    { id: 'livepd_4', showname: 'Live PD', episodename: '11/17/2016', season: 1, overall: 4, episode: 4, airdate: '11/17/2016', notes: [''], watched: false },
    { id: 'livepd_5', showname: 'Live PD', episodename: '11/18/2016', season: 1, overall: 5, episode: 5, airdate: '11/18/2016', notes: [''], watched: false },
    { id: 'livepd_6', showname: 'Live PD', episodename: '11/25/2016', season: 1, overall: 6, episode: 6, airdate: '11/25/2016', notes: [''], watched: false },
    { id: 'livepd_7', showname: 'Live PD', episodename: '12/02/2016', season: 1, overall: 7, episode: 7, airdate: '12/02/2016', notes: [''], watched: false },
    { id: 'livepd_8', showname: 'Live PD', episodename: '12/09/2016', season: 1, overall: 8, episode: 8, airdate: '12/09/2016', notes: [''], watched: false },
    { id: 'livepd_9', showname: 'Live PD', episodename: '12/16/2016', season: 1, overall: 9, episode: 9, airdate: '12/16/2016', notes: [''], watched: false },
    { id: 'livepd_10', showname: 'Live PD', episodename: '01/06/2017', season: 1, overall: 10, episode: 10, airdate: '01/06/2017', notes: [''], watched: false },
    { id: 'livepd_11', showname: 'Live PD', episodename: '01/13/2017', season: 1, overall: 11, episode: 11, airdate: '01/13/2017', notes: [''], watched: false },
    { id: 'livepd_12', showname: 'Live PD', episodename: '01/20/2017', season: 1, overall: 12, episode: 12, airdate: '01/20/2017', notes: [''], watched: false },
    { id: 'livepd_13', showname: 'Live PD', episodename: '01/27/2017', season: 1, overall: 13, episode: 13, airdate: '01/27/2017', notes: [''], watched: false },
    { id: 'livepd_14', showname: 'Live PD', episodename: '02/03/2017', season: 1, overall: 14, episode: 14, airdate: '02/03/2017', notes: [''], watched: false },
    { id: 'livepd_15', showname: 'Live PD', episodename: '02/04/2017', season: 1, overall: 15, episode: 15, airdate: '02/04/2017', notes: [''], watched: false },
    { id: 'livepd_16', showname: 'Live PD', episodename: '02/10/2017', season: 1, overall: 16, episode: 16, airdate: '02/10/2017', notes: [''], watched: false },
    { id: 'livepd_17', showname: 'Live PD', episodename: '02/11/2017', season: 1, overall: 17, episode: 17, airdate: '02/11/2017', notes: [''], watched: false },
    { id: 'livepd_18', showname: 'Live PD', episodename: '02/17/2017', season: 1, overall: 18, episode: 18, airdate: '02/17/2017', notes: [''], watched: false },
    { id: 'livepd_19', showname: 'Live PD', episodename: '02/24/2017', season: 1, overall: 19, episode: 19, airdate: '02/24/2017', notes: [''], watched: false },
    { id: 'livepd_20', showname: 'Live PD', episodename: '03/03/2017', season: 1, overall: 20, episode: 20, airdate: '03/03/2017', notes: [''], watched: false },
    { id: 'livepd_21', showname: 'Live PD', episodename: '03/04/2017', season: 1, overall: 21, episode: 21, airdate: '03/04/2017', notes: [''], watched: false },
    { id: 'livepd_22', showname: 'Live PD', episodename: '03/10/2017', season: 1, overall: 22, episode: 22, airdate: '03/10/2017', notes: [''], watched: false },
    { id: 'livepd_23', showname: 'Live PD', episodename: '03/11/2017', season: 1, overall: 23, episode: 23, airdate: '03/11/2017', notes: [''], watched: false },
    { id: 'livepd_24', showname: 'Live PD', episodename: '03/17/2017', season: 1, overall: 24, episode: 24, airdate: '03/17/2017', notes: [''], watched: false },
    { id: 'livepd_25', showname: 'Live PD', episodename: '03/18/2017', season: 1, overall: 25, episode: 25, airdate: '03/18/2017', notes: [''], watched: false },
    { id: 'livepd_26', showname: 'Live PD', episodename: '03/24/2017', season: 1, overall: 26, episode: 26, airdate: '03/24/2017', notes: [''], watched: false },
    { id: 'livepd_27', showname: 'Live PD', episodename: '03/25/2017', season: 1, overall: 27, episode: 27, airdate: '03/25/2017', notes: [''], watched: false },
    { id: 'livepd_28', showname: 'Live PD', episodename: '03/31/2017', season: 1, overall: 28, episode: 28, airdate: '03/31/2017', notes: [''], watched: false },
    { id: 'livepd_29', showname: 'Live PD', episodename: '04/07/2017', season: 1, overall: 29, episode: 29, airdate: '04/07/2017', notes: [''], watched: false },
    { id: 'livepd_30', showname: 'Live PD', episodename: '04/08/2017', season: 1, overall: 30, episode: 30, airdate: '04/08/2017', notes: [''], watched: false },
    { id: 'livepd_31', showname: 'Live PD', episodename: '04/14/2017', season: 1, overall: 31, episode: 31, airdate: '04/14/2017', notes: [''], watched: false },
    { id: 'livepd_32', showname: 'Live PD', episodename: '04/15/2017', season: 1, overall: 32, episode: 32, airdate: '04/15/2017', notes: [''], watched: false },
    { id: 'livepd_33', showname: 'Live PD', episodename: '04/21/2017', season: 1, overall: 33, episode: 33, airdate: '04/21/2017', notes: [''], watched: false },
    { id: 'livepd_34', showname: 'Live PD', episodename: '04/22/2017', season: 1, overall: 34, episode: 34, airdate: '04/22/2017', notes: [''], watched: false },
    { id: 'livepd_35', showname: 'Live PD', episodename: '04/28/2017', season: 1, overall: 35, episode: 35, airdate: '04/28/2017', notes: [''], watched: false },
    { id: 'livepd_36', showname: 'Live PD', episodename: '04/29/2017', season: 1, overall: 36, episode: 36, airdate: '04/29/2017', notes: [''], watched: false },
    { id: 'livepd_37', showname: 'Live PD', episodename: '05/05/2017', season: 1, overall: 37, episode: 37, airdate: '05/05/2017', notes: [''], watched: false },
    { id: 'livepd_38', showname: 'Live PD', episodename: '05/06/2017', season: 1, overall: 38, episode: 38, airdate: '05/06/2017', notes: [''], watched: false },
    { id: 'livepd_39', showname: 'Live PD', episodename: '05/12/2017', season: 1, overall: 39, episode: 39, airdate: '05/12/2017', notes: [''], watched: false },
    { id: 'livepd_40', showname: 'Live PD', episodename: '05/13/2017', season: 1, overall: 40, episode: 40, airdate: '05/13/2017'
        , notes: ['Was to air May 13, 2017-Cancelled due to Power outage'], watched: false },
    { id: 'livepd_41', showname: 'Live PD', episodename: '06/02/2017', season: 1, overall: 41, episode: 41, airdate: '06/02/2017', notes: [''], watched: false },
    { id: 'livepd_42', showname: 'Live PD', episodename: '06/03/2017', season: 1, overall: 42, episode: 42, airdate: '06/03/2017', notes: [''], watched: false },
    { id: 'livepd_43', showname: 'Live PD', episodename: '06/09/2017', season: 1, overall: 43, episode: 43, airdate: '06/09/2017', notes: [''], watched: false },
    { id: 'livepd_44', showname: 'Live PD', episodename: '06/10/2017', season: 1, overall: 44, episode: 44, airdate: '06/10/2017', notes: [''], watched: false },
    { id: 'livepd_45', showname: 'Live PD', episodename: '06/16/2017', season: 1, overall: 45, episode: 45, airdate: '06/16/2017', notes: [''], watched: false },
    { id: 'livepd_46', showname: 'Live PD', episodename: '06/17/2017', season: 1, overall: 46, episode: 46, airdate: '06/17/2017', notes: [''], watched: false },
    { id: 'livepd_47', showname: 'Live PD', episodename: '06/23/2017', season: 1, overall: 47, episode: 47, airdate: '06/23/2017', notes: [''], watched: false },
    { id: 'livepd_48', showname: 'Live PD', episodename: '06/24/2017', season: 1, overall: 48, episode: 48, airdate: '06/24/2017', notes: [''], watched: false },
    { id: 'livepd_49', showname: 'Live PD', episodename: '07/07/2017', season: 1, overall: 49, episode: 49, airdate: '07/07/2017', notes: [''], watched: false },
    { id: 'livepd_50', showname: 'Live PD', episodename: '07/08/2017', season: 1, overall: 50, episode: 50, airdate: '07/08/2017', notes: [''], watched: false },
    { id: 'livepd_51', showname: 'Live PD', episodename: '07/14/2017', season: 1, overall: 51, episode: 51, airdate: '07/14/2017', notes: [''], watched: false },
    { id: 'livepd_52', showname: 'Live PD', episodename: '07/15/2017', season: 1, overall: 52, episode: 52, airdate: '07/15/2017', notes: [''], watched: false },
    { id: 'livepd_53', showname: 'Live PD', episodename: '07/21/2017', season: 1, overall: 53, episode: 53, airdate: '07/21/2017', notes: [''], watched: false },
    { id: 'livepd_54', showname: 'Live PD', episodename: '07/22/2017', season: 1, overall: 54, episode: 54, airdate: '07/22/2017', notes: [''], watched: false },
    { id: 'livepd_55', showname: 'Live PD', episodename: '07/28/2017', season: 1, overall: 55, episode: 55, airdate: '07/28/2017', notes: [''], watched: false },
    { id: 'livepd_56', showname: 'Live PD', episodename: '07/29/2017', season: 1, overall: 56, episode: 56, airdate: '07/29/2017', notes: [''], watched: false },
    { id: 'livepd_57', showname: 'Live PD', episodename: '08/04/2017', season: 1, overall: 57, episode: 57, airdate: '08/04/2017', notes: [''], watched: false },
    { id: 'livepd_58', showname: 'Live PD', episodename: '08/05/2017', season: 1, overall: 58, episode: 58, airdate: '08/05/2017', notes: [''], watched: false },
    { id: 'livepd_59', showname: 'Live PD', episodename: '08/11/2017', season: 1, overall: 59, episode: 59, airdate: '08/11/2017', notes: [''], watched: false },
    { id: 'livepd_60', showname: 'Live PD', episodename: '08/12/2017', season: 1, overall: 60, episode: 60, airdate: '08/12/2017', notes: [''], watched: false },
    { id: 'livepd_61', showname: 'Live PD', episodename: '08/18/2017', season: 1, overall: 61, episode: 61, airdate: '08/18/2017', notes: [''], watched: false },
    { id: 'livepd_62', showname: 'Live PD', episodename: '08/19/2017', season: 1, overall: 62, episode: 62, airdate: '08/19/2017', notes: [''], watched: false },
    { id: 'livepd_63', showname: 'Live PD', episodename: '10/06/2017', season: 2, overall: 63, episode: 1, airdate: '10/06/2017', notes: [''], watched: false },
    { id: 'livepd_64', showname: 'Live PD', episodename: '10/07/2017', season: 2, overall: 64, episode: 2, airdate: '10/07/2017', notes: [''], watched: false },
    { id: 'livepd_65', showname: 'Live PD', episodename: '10/13/2017', season: 2, overall: 65, episode: 3, airdate: '10/13/2017', notes: [''], watched: false },
    { id: 'livepd_66', showname: 'Live PD', episodename: '10/14/2017', season: 2, overall: 66, episode: 4, airdate: '10/14/2017', notes: [''], watched: false },
    { id: 'livepd_67', showname: 'Live PD', episodename: '10/20/2017', season: 2, overall: 67, episode: 5, airdate: '10/20/2017', notes: [''], watched: false },
    { id: 'livepd_68', showname: 'Live PD', episodename: '10/21/2017', season: 2, overall: 68, episode: 6, airdate: '10/21/2017', notes: [''], watched: false },
    { id: 'livepd_69', showname: 'Live PD', episodename: '10/27/2017', season: 2, overall: 69, episode: 7, airdate: '10/27/2017', notes: [''], watched: false },
    { id: 'livepd_70', showname: 'Live PD', episodename: '10/28/2017', season: 2, overall: 70, episode: 8, airdate: '10/28/2017', notes: [''], watched: false },
    { id: 'livepd_71', showname: 'Live PD', episodename: '11/03/2017', season: 2, overall: 71, episode: 9, airdate: '11/03/2017', notes: [''], watched: false },
    { id: 'livepd_72', showname: 'Live PD', episodename: '11/04/2017', season: 2, overall: 72, episode: 10, airdate: '11/04/2017', notes: [''], watched: false },
    { id: 'livepd_73', showname: 'Live PD', episodename: '11/10/2017', season: 2, overall: 73, episode: 11, airdate: '11/10/2017', notes: [''], watched: false },
    { id: 'livepd_74', showname: 'Live PD', episodename: '11/11/2017', season: 2, overall: 74, episode: 12, airdate: '11/11/2017', notes: [''], watched: false },
    { id: 'livepd_75', showname: 'Live PD', episodename: '11/17/2017', season: 2, overall: 75, episode: 13, airdate: '11/17/2017', notes: [''], watched: false },
    { id: 'livepd_76', showname: 'Live PD', episodename: '11/18/2017', season: 2, overall: 76, episode: 14, airdate: '11/18/2017', notes: [''], watched: false },
    { id: 'livepd_77', showname: 'Live PD', episodename: '11/24/2017', season: 2, overall: 77, episode: 15, airdate: '11/24/2017', notes: [''], watched: false },
    { id: 'livepd_78', showname: 'Live PD', episodename: '11/25/2017', season: 2, overall: 78, episode: 16, airdate: '11/25/2017', notes: [''], watched: false },
    { id: 'livepd_79', showname: 'Live PD', episodename: '12/01/2017', season: 2, overall: 79, episode: 17, airdate: '12/01/2017', notes: [''], watched: false },
    { id: 'livepd_80', showname: 'Live PD', episodename: '12/02/2017', season: 2, overall: 80, episode: 18, airdate: '12/02/2017', notes: [''], watched: false },
    { id: 'livepd_81', showname: 'Live PD', episodename: '12/08/2017', season: 2, overall: 81, episode: 19, airdate: '12/08/2017', notes: [''], watched: false },
    { id: 'livepd_82', showname: 'Live PD', episodename: '12/09/2017', season: 2, overall: 82, episode: 20, airdate: '12/09/2017', notes: [''], watched: false },
    { id: 'livepd_83', showname: 'Live PD', episodename: '12/15/2017', season: 2, overall: 83, episode: 21, airdate: '12/15/2017', notes: [''], watched: false },
    { id: 'livepd_84', showname: 'Live PD', episodename: '12/16/2017', season: 2, overall: 84, episode: 22, airdate: '12/16/2017', notes: [''], watched: false },
    { id: 'livepd_85', showname: 'Live PD', episodename: '01/05/2018', season: 2, overall: 85, episode: 23, airdate: '01/05/2018', notes: [''], watched: false },
    { id: 'livepd_86', showname: 'Live PD', episodename: '01/06/2018', season: 2, overall: 86, episode: 24, airdate: '01/06/2018', notes: [''], watched: false },
    { id: 'livepd_87', showname: 'Live PD', episodename: '01/12/2018', season: 2, overall: 87, episode: 25, airdate: '01/12/2018', notes: [''], watched: false },
    { id: 'livepd_88', showname: 'Live PD', episodename: '01/13/2018', season: 2, overall: 88, episode: 26, airdate: '01/13/2018', notes: [''], watched: false },
    { id: 'livepd_89', showname: 'Live PD', episodename: '01/19/2018', season: 2, overall: 89, episode: 27, airdate: '01/19/2018', notes: [''], watched: false },
    { id: 'livepd_90', showname: 'Live PD', episodename: '01/20/2018', season: 2, overall: 90, episode: 28, airdate: '01/20/2018', notes: [''], watched: false },
    { id: 'livepd_91', showname: 'Live PD', episodename: '01/26/2018', season: 2, overall: 91, episode: 29, airdate: '01/26/2018', notes: [''], watched: false },
    { id: 'livepd_92', showname: 'Live PD', episodename: '01/27/2018', season: 2, overall: 92, episode: 30, airdate: '01/27/2018', notes: [''], watched: false },
    { id: 'livepd_93', showname: 'Live PD', episodename: '02/02/2018', season: 2, overall: 93, episode: 31, airdate: '02/02/2018', notes: [''], watched: false },
    { id: 'livepd_94', showname: 'Live PD', episodename: '02/03/2018', season: 2, overall: 94, episode: 32, airdate: '02/03/2018', notes: [''], watched: false },
    { id: 'livepd_95', showname: 'Live PD', episodename: '02/16/2018', season: 2, overall: 95, episode: 33, airdate: '02/16/2018', notes: [''], watched: false },
    { id: 'livepd_96', showname: 'Live PD', episodename: '02/17/2018', season: 2, overall: 96, episode: 34, airdate: '02/17/2018', notes: [''], watched: false },
    { id: 'livepd_97', showname: 'Live PD', episodename: '02/23/2018', season: 2, overall: 97, episode: 35, airdate: '02/23/2018', notes: [''], watched: false },
    { id: 'livepd_98', showname: 'Live PD', episodename: '02/24/2018', season: 2, overall: 98, episode: 36, airdate: '02/24/2018', notes: [''], watched: false },
    { id: 'livepd_99', showname: 'Live PD', episodename: '03/02/2018', season: 2, overall: 99, episode: 37, airdate: '03/02/2018', notes: [''], watched: false },
    { id: 'livepd_100', showname: 'Live PD', episodename: '03/03/2018', season: 2, overall: 100, episode: 38, airdate: '03/03/2018', notes: [''], watched: false },
    { id: 'livepd_101', showname: 'Live PD', episodename: '03/09/2018', season: 2, overall: 101, episode: 39, airdate: '03/09/2018', notes: [''], watched: false },
    { id: 'livepd_102', showname: 'Live PD', episodename: '03/10/2018', season: 2, overall: 102, episode: 40, airdate: '03/10/2018', notes: [''], watched: false },
    { id: 'livepd_103', showname: 'Live PD', episodename: '03/16/2018', season: 2, overall: 103, episode: 41, airdate: '03/16/2018', notes: [''], watched: false },
    { id: 'livepd_104', showname: 'Live PD', episodename: '03/17/2018', season: 2, overall: 104, episode: 42, airdate: '03/17/2018', notes: [''], watched: false },
    { id: 'livepd_105', showname: 'Live PD', episodename: '03/23/2018', season: 2, overall: 105, episode: 43, airdate: '03/23/2018', notes: [''], watched: false },
    { id: 'livepd_106', showname: 'Live PD', episodename: '03/24/2018', season: 2, overall: 106, episode: 44, airdate: '03/24/2018', notes: [''], watched: false },
    { id: 'livepd_107', showname: 'Live PD', episodename: '04/06/2018', season: 2, overall: 107, episode: 45, airdate: '04/06/2018', notes: [''], watched: false },
    { id: 'livepd_108', showname: 'Live PD', episodename: '04/07/2018', season: 2, overall: 108, episode: 46, airdate: '04/07/2018', notes: [''], watched: false },
    { id: 'livepd_109', showname: 'Live PD', episodename: '04/13/2018', season: 2, overall: 109, episode: 47, airdate: '04/13/2018', notes: [''], watched: false },
    { id: 'livepd_110', showname: 'Live PD', episodename: '04/14/2018', season: 2, overall: 110, episode: 48, airdate: '04/14/2018', notes: [''], watched: false },
    { id: 'friends_1', showname: 'Friends', season: 1, episode: 1, overall: 1, episodename: 'The Pilot', airdate: '9/22/1994', notes: [''], watched: false },
    { id: 'friends_2', showname: 'Friends', season: 1, episode: 2, overall: 2, episodename: 'The One with the Sonogram at the End', airdate: '9/29/1994', notes: [''], watched: false },
    { id: 'friends_3', showname: 'Friends', season: 1, episode: 3, overall: 3, episodename: 'The One with the Thumb', airdate: '10/6/1994', notes: [''], watched: false },
    { id: 'friends_4', showname: 'Friends', season: 1, episode: 4, overall: 4, episodename: 'The One with George Stephanopoulos', airdate: '10/13/1994', notes: [''], watched: false },
    { id: 'friends_5', showname: 'Friends', season: 1, episode: 5, overall: 5, episodename: 'The One with the East German Laundry Detergent', airdate: '10/20/1994', notes: [''], watched: false },
    { id: 'friends_6', showname: 'Friends', season: 1, episode: 6, overall: 6, episodename: 'The One with the Butt', airdate: '10/27/1994', notes: [''], watched: false },
    { id: 'friends_7', showname: 'Friends', season: 1, episode: 7, overall: 7, episodename: 'The One with the Blackout', airdate: '11/3/1994', notes: [''], watched: false },
    { id: 'friends_8', showname: 'Friends', season: 1, episode: 8, overall: 8, episodename: 'The One Where Nana Dies Twice', airdate: '11/10/1994', notes: [''], watched: false },
    { id: 'friends_9', showname: 'Friends', season: 1, episode: 9, overall: 9, episodename: 'The One Where Underdog Gets Away', airdate: '11/17/1994', notes: [''], watched: false },
    { id: 'friends_10', showname: 'Friends', season: 1, episode: 10, overall: 10, episodename: 'The One with the Monkey', airdate: '12/15/1994', notes: [''], watched: false },
    { id: 'friends_11', showname: 'Friends', season: 1, episode: 11, overall: 11, episodename: 'The One with Mrs. Bing', airdate: '1/5/1995', notes: [''], watched: false },
    { id: 'friends_12', showname: 'Friends', season: 1, episode: 12, overall: 12, episodename: 'The One with the Dozen Lasagnas', airdate: '1/12/1995', notes: [''], watched: false },
    { id: 'friends_13', showname: 'Friends', season: 1, episode: 13, overall: 13, episodename: 'The One with the Boobies', airdate: '1/19/1995', notes: [''], watched: false },
    { id: 'friends_14', showname: 'Friends', season: 1, episode: 14, overall: 14, episodename: 'The One with the Candy Hearts', airdate: '2/9/1995', notes: [''], watched: false },
    { id: 'friends_15', showname: 'Friends', season: 1, episode: 15, overall: 15, episodename: 'The One with the Stoned Guy', airdate: '2/16/1995', notes: [''], watched: false },
    { id: 'friends_16', showname: 'Friends', season: 1, episode: 16, overall: 16, episodename: 'The One with Two Parts: Part 1', airdate: '2/23/1995', notes: [''], watched: false },
    { id: 'friends_17', showname: 'Friends', season: 1, episode: 17, overall: 17, episodename: 'The One with Two Parts: Part 2', airdate: '2/23/1995', notes: [''], watched: false },
    { id: 'friends_18', showname: 'Friends', season: 1, episode: 18, overall: 18, episodename: 'The One with All the Poker', airdate: '3/2/1995', notes: [''], watched: false },
    { id: 'friends_19', showname: 'Friends', season: 1, episode: 19, overall: 19, episodename: 'The One Where the Monkey Gets Away', airdate: '3/9/1995', notes: [''], watched: false },
    { id: 'friends_20', showname: 'Friends', season: 1, episode: 20, overall: 20, episodename: 'The One with the Evil Orthodontist', airdate: '4/6/1995', notes: [''], watched: false },
    { id: 'friends_21', showname: 'Friends', season: 1, episode: 21, overall: 21, episodename: 'The One with the Fake Monica', airdate: '4/27/1995', notes: [''], watched: false },
    { id: 'friends_22', showname: 'Friends', season: 1, episode: 22, overall: 22, episodename: 'The One with the Ick Factor', airdate: '5/4/1995', notes: [''], watched: false },
    { id: 'friends_23', showname: 'Friends', season: 1, episode: 23, overall: 23, episodename: 'The One with the Birth', airdate: '5/11/1995', notes: [''], watched: false },
    { id: 'friends_24', showname: 'Friends', season: 1, episode: 24, overall: 24, episodename: 'The One Where Rachel Finds Out', airdate: '5/18/1995', notes: [''], watched: false },
    { id: 'friends_25', showname: 'Friends', season: 2, episode: 1, overall: 25, episodename: 'The One with Ross\'s New Girlfriend', airdate: '9/21/1995', notes: [''], watched: false },
    { id: 'friends_26', showname: 'Friends', season: 2, episode: 2, overall: 26, episodename: 'The One with the Breast Milk', airdate: '9/28/1995', notes: [''], watched: false },
    { id: 'friends_27', showname: 'Friends', season: 2, episode: 3, overall: 27, episodename: 'The One Where Heckles Dies', airdate: '10/5/1995', notes: [''], watched: false },
    { id: 'friends_28', showname: 'Friends', season: 2, episode: 4, overall: 28, episodename: 'The One with Phoebe\'s Husband', airdate: '10/12/1995', notes: [''], watched: false },
    { id: 'friends_29', showname: 'Friends', season: 2, episode: 5, overall: 29, episodename: 'The One with Five Steaks and an Eggplant', airdate: '10/19/1995', notes: [''], watched: false },
    { id: 'friends_30', showname: 'Friends', season: 2, episode: 6, overall: 30, episodename: 'The One with the Baby on the Bus', airdate: '11/2/1995', notes: [''], watched: false },
    { id: 'friends_31', showname: 'Friends', season: 2, episode: 7, overall: 31, episodename: 'The One Where Ross Finds Out', airdate: '11/9/1995', notes: [''], watched: false },
    { id: 'friends_32', showname: 'Friends', season: 2, episode: 8, overall: 32, episodename: 'The One with the List', airdate: '11/16/1995', notes: [''], watched: false },
    { id: 'friends_33', showname: 'Friends', season: 2, episode: 9, overall: 33, episodename: 'The One with Phoebe\'s Dad', airdate: '12/14/1995', notes: [''], watched: false },
    { id: 'friends_34', showname: 'Friends', season: 2, episode: 10, overall: 34, episodename: 'The One with Russ', airdate: '1/4/1996', notes: [''], watched: false },
    { id: 'friends_35', showname: 'Friends', season: 2, episode: 11, overall: 35, episodename: 'The One with the Lesbian Wedding', airdate: '1/18/1996', notes: [''], watched: false },
    { id: 'friends_36', showname: 'Friends', season: 2, episode: 12, overall: 36, episodename: 'The One After the Superbowl', airdate: '1/28/1996', notes: [''], watched: false },
    { id: 'friends_37', showname: 'Friends', season: 2, episode: 13, overall: 37, episodename: 'The One After the Superbowl', airdate: '1/28/1996', notes: [''], watched: false },
    { id: 'friends_38', showname: 'Friends', season: 2, episode: 14, overall: 38, episodename: 'The One with the Prom Video', airdate: '2/1/1996', notes: [''], watched: false },
    { id: 'friends_39', showname: 'Friends', season: 2, episode: 15, overall: 39, episodename: 'The One Where Ross and Rachel ... You Know', airdate: '2/8/1996', notes: [''], watched: false },
    { id: 'friends_40', showname: 'Friends', season: 2, episode: 16, overall: 40, episodename: 'The One Where Joey Moves Out', airdate: '2/15/1996', notes: [''], watched: false },
    { id: 'friends_41', showname: 'Friends', season: 2, episode: 17, overall: 41, episodename: 'The One Where Eddie Moves In', airdate: '2/22/1996', notes: [''], watched: false },
    { id: 'friends_42', showname: 'Friends', season: 2, episode: 18, overall: 42, episodename: 'The One Where Dr. Ramoray Dies', airdate: '3/21/1996', notes: [''], watched: false },
    { id: 'friends_43', showname: 'Friends', season: 2, episode: 19, overall: 43, episodename: 'The One Where Eddie Won\'t Go', airdate: '3/28/1996', notes: [''], watched: false },
    { id: 'friends_44', showname: 'Friends', season: 2, episode: 20, overall: 44, episodename: 'The One Where Old Yeller Dies', airdate: '4/4/1996', notes: [''], watched: false },
    { id: 'friends_45', showname: 'Friends', season: 2, episode: 21, overall: 45, episodename: 'The One with the Bullies', airdate: '4/25/1996', notes: [''], watched: false },
    { id: 'friends_46', showname: 'Friends', season: 2, episode: 22, overall: 46, episodename: 'The One with the Two Parties', airdate: '5/2/1996', notes: [''], watched: false },
    { id: 'friends_47', showname: 'Friends', season: 2, episode: 23, overall: 47, episodename: 'The One with the Chicken Pox', airdate: '5/9/1996', notes: [''], watched: false },
    { id: 'friends_48', showname: 'Friends', season: 2, episode: 24, overall: 48, episodename: 'The One with Barry and Mindy\'s Wedding', airdate: '5/16/1996', notes: [''], watched: false },
    { id: 'friends_49', showname: 'Friends', season: 3, episode: 1, overall: 49, episodename: 'The One with the Princess Leia Fantasy', airdate: '9/19/1996', notes: [''], watched: false },
    { id: 'friends_50', showname: 'Friends', season: 3, episode: 2, overall: 50, episodename: 'The One Where No One\'s Ready', airdate: '9/26/1996', notes: [''], watched: false },
    { id: 'friends_51', showname: 'Friends', season: 3, episode: 3, overall: 51, episodename: 'The One with the Jam', airdate: '10/3/1996', notes: [''], watched: false },
    { id: 'friends_52', showname: 'Friends', season: 3, episode: 4, overall: 52, episodename: 'The One with the Metaphorical Tunnel', airdate: '10/10/1996', notes: [''], watched: false },
    { id: 'friends_53', showname: 'Friends', season: 3, episode: 5, overall: 53, episodename: 'The One with Frank Jr.', airdate: '10/17/1996', notes: [''], watched: false },
    { id: 'friends_54', showname: 'Friends', season: 3, episode: 6, overall: 54, episodename: 'The One with the Flashback', airdate: '10/31/1996', notes: [''], watched: false },
    { id: 'friends_55', showname: 'Friends', season: 3, episode: 7, overall: 55, episodename: 'The One with the Race Car Bed', airdate: '11/7/1996', notes: [''], watched: false },
    { id: 'friends_56', showname: 'Friends', season: 3, episode: 8, overall: 56, episodename: 'The One with the Giant Poking Device', airdate: '11/14/1996', notes: [''], watched: false },
    { id: 'friends_57', showname: 'Friends', season: 3, episode: 9, overall: 57, episodename: 'The One with the Football', airdate: '11/21/1996', notes: [''], watched: false },
    { id: 'friends_58', showname: 'Friends', season: 3, episode: 10, overall: 58, episodename: 'The One Where Rachel Quits', airdate: '12/12/1996', notes: [''], watched: false },
    { id: 'friends_59', showname: 'Friends', season: 3, episode: 11, overall: 59, episodename: 'The One Where Chandler Can\'t Remember Which Sister', airdate: '1/9/1997'
      , notes: [''], watched: false },
    { id: 'friends_60', showname: 'Friends', season: 3, episode: 12, overall: 60, episodename: 'The One with All the Jealousy', airdate: '1/16/1997', notes: [''], watched: false },
    { id: 'friends_61', showname: 'Friends', season: 3, episode: 13, overall: 61, episodename: 'The One Where Monica and Richard are Just Friends', airdate: '1/30/1997', notes: [''], watched: false },
    { id: 'friends_62', showname: 'Friends', season: 3, episode: 14, overall: 62, episodename: 'The One with Phoebe\'s Ex-Partner', airdate: '2/6/1997', notes: [''], watched: false },
    { id: 'friends_63', showname: 'Friends', season: 3, episode: 15, overall: 63, episodename: 'The One Where Ross and Rachel Take a Break', airdate: '2/13/1997', notes: [''], watched: false },
    { id: 'friends_64', showname: 'Friends', season: 3, episode: 16, overall: 64, episodename: 'The One with the Morning After', airdate: '2/20/1997', notes: [''], watched: false },
    { id: 'friends_65', showname: 'Friends', season: 3, episode: 17, overall: 65, episodename: 'The One Without the Ski Trip', airdate: '3/6/1997', notes: [''], watched: false },
    { id: 'friends_66', showname: 'Friends', season: 3, episode: 18, overall: 66, episodename: 'The One with the Hypnosis Tape', airdate: '3/13/1997', notes: [''], watched: false },
    { id: 'friends_67', showname: 'Friends', season: 3, episode: 19, overall: 67, episodename: 'The One with the Tiny T-Shirt', airdate: '3/27/1997', notes: [''], watched: false },
    { id: 'friends_68', showname: 'Friends', season: 3, episode: 20, overall: 68, episodename: 'The One with the Dollhouse', airdate: '4/3/1997', notes: [''], watched: false },
    { id: 'friends_69', showname: 'Friends', season: 3, episode: 21, overall: 69, episodename: 'The One with a Chick and a Duck', airdate: '4/17/1997', notes: [''], watched: false },
    { id: 'friends_70', showname: 'Friends', season: 3, episode: 22, overall: 70, episodename: 'The One with the Screamer', airdate: '4/24/1997', notes: [''], watched: false },
    { id: 'friends_71', showname: 'Friends', season: 3, episode: 23, overall: 71, episodename: 'The One with Ross\'s Thing', airdate: '5/1/1997', notes: [''], watched: false },
    { id: 'friends_72', showname: 'Friends', season: 3, episode: 24, overall: 72, episodename: 'The One with the Ultimate Fighting Champion', airdate: '5/8/1997', notes: [''], watched: false },
    { id: 'friends_73', showname: 'Friends', season: 3, episode: 25, overall: 73, episodename: 'The One at the Beach', airdate: '5/15/1997', notes: [''], watched: false },
    { id: 'friends_74', showname: 'Friends', season: 4, episode: 1, overall: 74, episodename: 'The One with the Jellyfish', airdate: '9/25/1997', notes: [''], watched: false },
    { id: 'friends_75', showname: 'Friends', season: 4, episode: 2, overall: 75, episodename: 'The One with the Cat', airdate: '10/2/1997', notes: [''], watched: false },
    { id: 'friends_76', showname: 'Friends', season: 4, episode: 3, overall: 76, episodename: 'The One with the Cuffs', airdate: '10/9/1997', notes: [''], watched: false },
    { id: 'friends_77', showname: 'Friends', season: 4, episode: 4, overall: 77, episodename: 'The One with the Ballroom Dancing', airdate: '10/16/1997', notes: [''], watched: false },
    { id: 'friends_78', showname: 'Friends', season: 4, episode: 5, overall: 78, episodename: 'The One with Joey\'s New Girlfriend', airdate: '10/30/1997', notes: [''], watched: false },
    { id: 'friends_79', showname: 'Friends', season: 4, episode: 6, overall: 79, episodename: 'The One with the Dirty Girl', airdate: '11/6/1997', notes: [''], watched: false },
    { id: 'friends_80', showname: 'Friends', season: 4, episode: 7, overall: 80, episodename: 'The One Where Chandler Crosses the Line', airdate: '11/13/1997', notes: [''], watched: false },
    { id: 'friends_81', showname: 'Friends', season: 4, episode: 8, overall: 81, episodename: 'The One with Chandler in a Box', airdate: '11/20/1997', notes: [''], watched: false },
    { id: 'friends_82', showname: 'Friends', season: 4, episode: 9, overall: 82, episodename: 'The One Where They\'re Going to Party!', airdate: '12/11/1997', notes: [''], watched: false },
    { id: 'friends_83', showname: 'Friends', season: 4, episode: 10, overall: 83, episodename: 'The One with the Girl from Poughkeepsie', airdate: '12/18/1997', notes: [''], watched: false },
    { id: 'friends_84', showname: 'Friends', season: 4, episode: 11, overall: 84, episodename: 'The One with Phoebe\'s Uterus', airdate: '1/8/1998', notes: [''], watched: false },
    { id: 'friends_85', showname: 'Friends', season: 4, episode: 12, overall: 85, episodename: 'The One with the Embryos', airdate: '1/15/1998', notes: [''], watched: false },
    { id: 'friends_86', showname: 'Friends', season: 4, episode: 13, overall: 86, episodename: 'The One with Rachel\'s Crush', airdate: '1/29/1998', notes: [''], watched: false },
    { id: 'friends_87', showname: 'Friends', season: 4, episode: 14, overall: 87, episodename: 'The One with Joey\'s Dirty Day', airdate: '2/5/1998', notes: [''], watched: false },
    { id: 'friends_88', showname: 'Friends', season: 4, episode: 15, overall: 88, episodename: 'The One with All the Rugby', airdate: '2/26/1998', notes: [''], watched: false },
    { id: 'friends_89', showname: 'Friends', season: 4, episode: 16, overall: 89, episodename: 'The One with the Fake Party', airdate: '3/19/1998', notes: [''], watched: false },
    { id: 'friends_90', showname: 'Friends', season: 4, episode: 17, overall: 90, episodename: 'The One with the Free Porn', airdate: '3/26/1998', notes: [''], watched: false },
    { id: 'friends_91', showname: 'Friends', season: 4, episode: 18, overall: 91, episodename: 'The One with Rachel\'s New Dress', airdate: '4/2/1998', notes: [''], watched: false },
    { id: 'friends_92', showname: 'Friends', season: 4, episode: 19, overall: 92, episodename: 'The One with All the Haste', airdate: '4/9/1998', notes: [''], watched: false },
    { id: 'friends_93', showname: 'Friends', season: 4, episode: 20, overall: 93, episodename: 'The One with All the Wedding Dresses', airdate: '4/16/1998', notes: [''], watched: false },
    { id: 'friends_94', showname: 'Friends', season: 4, episode: 21, overall: 94, episodename: 'The One with the Invitation', airdate: '4/23/1998', notes: [''], watched: false },
    { id: 'friends_95', showname: 'Friends', season: 4, episode: 22, overall: 95, episodename: 'The One with the Worst Best Man Ever', airdate: '4/30/1998', notes: [''], watched: false },
    { id: 'friends_96', showname: 'Friends', season: 4, episode: 23, overall: 96, episodename: 'The One with Ross\'s Wedding', airdate: '5/7/1998', notes: [''], watched: false },
    { id: 'friends_97', showname: 'Friends', season: 4, episode: 24, overall: 97, episodename: 'The One with Ross\'s Wedding', airdate: '5/7/1998', notes: [''], watched: false },
    { id: 'friends_98', showname: 'Friends', season: 5, episode: 1, overall: 98, episodename: 'The One After Ross Says Rachel', airdate: '9/24/1998', notes: [''], watched: false },
    { id: 'friends_99', showname: 'Friends', season: 5, episode: 2, overall: 99, episodename: 'The One with All the Kissing', airdate: '10/1/1998', notes: [''], watched: false },
    { id: 'friends_100', showname: 'Friends', season: 5, episode: 3, overall: 100, episodename: 'The One Hundredth, The One with the Triplets', airdate: '10/8/1998', notes: [''], watched: false },
    { id: 'friends_101', showname: 'Friends', season: 5, episode: 4, overall: 101, episodename: 'The One Where Phoebe Hates PBS', airdate: '10/15/1998', notes: [''], watched: false },
    { id: 'friends_102', showname: 'Friends', season: 5, episode: 5, overall: 102, episodename: 'The One with the Kips', airdate: '10/29/1998', notes: [''], watched: false },
    { id: 'friends_103', showname: 'Friends', season: 5, episode: 6, overall: 103, episodename: 'The One with the Yeti', airdate: '11/5/1998', notes: [''], watched: false },
    { id: 'friends_104', showname: 'Friends', season: 5, episode: 7, overall: 104, episodename: 'The One Where Ross Moves In', airdate: '11/12/1998', notes: [''], watched: false },
    { id: 'friends_105', showname: 'Friends', season: 5, episode: 8, overall: 105, episodename: 'The One with All the Thanksgivings', airdate: '11/19/1998', notes: [''], watched: false },
    { id: 'friends_106', showname: 'Friends', season: 5, episode: 9, overall: 106, episodename: 'The One with Ross\'s Sandwich', airdate: '12/10/1998', notes: [''], watched: false },
    { id: 'friends_107', showname: 'Friends', season: 5, episode: 10, overall: 107, episodename: 'The One with the Inappropriate Sister', airdate: '12/17/1998', notes: [''], watched: false },
    { id: 'friends_108', showname: 'Friends', season: 5, episode: 11, overall: 108, episodename: 'The One with All the Resolutions', airdate: '1/7/1999', notes: [''], watched: false },
    { id: 'friends_109', showname: 'Friends', season: 5, episode: 12, overall: 109, episodename: 'The One with Chandler\'s Work Laugh', airdate: '1/21/1999', notes: [''], watched: false },
    { id: 'friends_110', showname: 'Friends', season: 5, episode: 13, overall: 110, episodename: 'The One with Joey\'s Bag', airdate: '2/4/1999', notes: [''], watched: false },
    { id: 'friends_111', showname: 'Friends', season: 5, episode: 14, overall: 111, episodename: 'The One Where Everybody Finds Out', airdate: '2/11/1999', notes: [''], watched: false },
    { id: 'friends_112', showname: 'Friends', season: 5, episode: 15, overall: 112, episodename: 'The One with the Girl Who Hits Joey', airdate: '2/18/1999', notes: [''], watched: false },
    { id: 'friends_113', showname: 'Friends', season: 5, episode: 16, overall: 113, episodename: 'The One with the Cop', airdate: '2/25/1999', notes: [''], watched: false },
    { id: 'friends_114', showname: 'Friends', season: 5, episode: 17, overall: 114, episodename: 'The One with Rachel\'s Inadvertent Kiss', airdate: '3/18/1999', notes: [''], watched: false },
    { id: 'friends_115', showname: 'Friends', season: 5, episode: 18, overall: 115, episodename: 'The One Where Rachel Smokes', airdate: '4/8/1999', notes: [''], watched: false },
    { id: 'friends_116', showname: 'Friends', season: 5, episode: 19, overall: 116, episodename: 'The One Where Ross Can\'t Flirt', airdate: '4/22/1999', notes: [''], watched: false },
    { id: 'friends_117', showname: 'Friends', season: 5, episode: 20, overall: 117, episodename: 'The One with the Ride-Along', airdate: '4/29/1999', notes: [''], watched: false },
    { id: 'friends_118', showname: 'Friends', season: 5, episode: 21, overall: 118, episodename: 'The One with the Ball', airdate: '5/6/1999', notes: [''], watched: false },
    { id: 'friends_119', showname: 'Friends', season: 5, episode: 22, overall: 119, episodename: 'The One with Joey\'s Big Break', airdate: '5/13/1999', notes: [''], watched: false },
    { id: 'friends_120', showname: 'Friends', season: 5, episode: 23, overall: 120, episodename: 'The One in Vegas', airdate: '5/20/1999', notes: [''], watched: false },
    { id: 'friends_121', showname: 'Friends', season: 5, episode: 24, overall: 121, episodename: 'The One in Vegas', airdate: '5/20/1999', notes: [''], watched: false },
    { id: 'friends_122', showname: 'Friends', season: 6, episode: 1, overall: 122, episodename: 'The One After Vegas', airdate: '9/23/1999', notes: [''], watched: false },
    { id: 'friends_123', showname: 'Friends', season: 6, episode: 2, overall: 123, episodename: 'The One Where Ross Hugs Rachel', airdate: '9/30/1999', notes: [''], watched: false },
    { id: 'friends_124', showname: 'Friends', season: 6, episode: 3, overall: 124, episodename: 'The One with Ross\'s Denial', airdate: '10/7/1999', notes: [''], watched: false },
    { id: 'friends_125', showname: 'Friends', season: 6, episode: 4, overall: 125, episodename: 'The One Where Joey Loses His Insurance', airdate: '10/14/1999', notes: [''], watched: false },
    { id: 'friends_126', showname: 'Friends', season: 6, episode: 5, overall: 126, episodename: 'The One with Joey\'s Porsche', airdate: '10/21/1999', notes: [''], watched: false },
    { id: 'friends_127', showname: 'Friends', season: 6, episode: 6, overall: 127, episodename: 'The One on the Last Night', airdate: '11/4/1999', notes: [''], watched: false },
    { id: 'friends_128', showname: 'Friends', season: 6, episode: 7, overall: 128, episodename: 'The One Where Phoebe Runs', airdate: '11/11/1999', notes: [''], watched: false },
    { id: 'friends_129', showname: 'Friends', season: 6, episode: 8, overall: 129, episodename: 'The One with Ross\'s Teeth', airdate: '11/18/1999', notes: [''], watched: false },
    { id: 'friends_130', showname: 'Friends', season: 6, episode: 9, overall: 130, episodename: 'The One Where Ross Got High', airdate: '11/25/1999', notes: [''], watched: false },
    { id: 'friends_131', showname: 'Friends', season: 6, episode: 10, overall: 131, episodename: 'The One with the Routine', airdate: '12/16/1999', notes: [''], watched: false },
    { id: 'friends_132', showname: 'Friends', season: 6, episode: 11, overall: 132, episodename: 'The One with the Apothecary Table', airdate: '1/6/2000', notes: [''], watched: false },
    { id: 'friends_133', showname: 'Friends', season: 6, episode: 12, overall: 133, episodename: 'The One with the Joke', airdate: '1/13/2000', notes: [''], watched: false },
    { id: 'friends_134', showname: 'Friends', season: 6, episode: 13, overall: 134, episodename: 'The One with Rachel\'s Sister', airdate: '2/3/2000', notes: [''], watched: false },
    { id: 'friends_135', showname: 'Friends', season: 6, episode: 14, overall: 135, episodename: 'The One Where Chandler Can\'t Cry', airdate: '2/10/2000', notes: [''], watched: false },
    { id: 'friends_136', showname: 'Friends', season: 6, episode: 15, overall: 136, episodename: 'The One That Could Have Been', airdate: '2/17/2000', notes: [''], watched: false },
    { id: 'friends_137', showname: 'Friends', season: 6, episode: 16, overall: 137, episodename: 'The One That Could Have Been', airdate: '2/17/2000', notes: [''], watched: false },
    { id: 'friends_138', showname: 'Friends', season: 6, episode: 17, overall: 138, episodename: 'The One with Unagi, The One with the Mix Tape', airdate: '2/24/2000', notes: [''], watched: false },
    { id: 'friends_139', showname: 'Friends', season: 6, episode: 18, overall: 139, episodename: 'The One Where Ross Dates a Student', airdate: '3/9/2000', notes: [''], watched: false },
    { id: 'friends_140', showname: 'Friends', season: 6, episode: 19, overall: 140, episodename: 'The One with Joey\'s Fridge', airdate: '3/23/2000', notes: [''], watched: false },
    { id: 'friends_141', showname: 'Friends', season: 6, episode: 20, overall: 141, episodename: 'The One with Mac and C.H.E.E.S.E.', airdate: '4/13/2000', notes: [''], watched: false },
    { id: 'friends_142', showname: 'Friends', season: 6, episode: 21, overall: 142, episodename: 'The One Where Ross Meets Elizabeth\'s Dad', airdate: '4/27/2000', notes: [''], watched: false },
    { id: 'friends_143', showname: 'Friends', season: 6, episode: 22, overall: 143, episodename: 'The One Where Paul\'s the Man', airdate: '5/4/2000', notes: [''], watched: false },
    { id: 'friends_144', showname: 'Friends', season: 6, episode: 23, overall: 144, episodename: 'The One with the Ring', airdate: '5/11/2000', notes: [''], watched: false },
    { id: 'friends_145', showname: 'Friends', season: 6, episode: 24, overall: 145, episodename: 'The One with the Proposal', airdate: '5/18/2000', notes: [''], watched: false },
    { id: 'friends_146', showname: 'Friends', season: 6, episode: 25, overall: 146, episodename: 'The One with the Proposal', airdate: '5/18/2000', notes: [''], watched: false },
    { id: 'friends_147', showname: 'Friends', season: 7, episode: 1, overall: 147, episodename: 'The One with Monica\'s Thunder', airdate: '10/12/2000', notes: [''], watched: false },
    { id: 'friends_148', showname: 'Friends', season: 7, episode: 2, overall: 148, episodename: 'The One with Rachel\'s Book', airdate: '10/12/2000', notes: [''], watched: false },
    { id: 'friends_149', showname: 'Friends', season: 7, episode: 3, overall: 149, episodename: 'The One with Phoebe\'s Cookies', airdate: '10/19/2000', notes: [''], watched: false },
    { id: 'friends_150', showname: 'Friends', season: 7, episode: 4, overall: 150, episodename: 'The One with Rachel\'s Assistant', airdate: '10/26/2000', notes: [''], watched: false },
    { id: 'friends_151', showname: 'Friends', season: 7, episode: 5, overall: 151, episodename: 'The One with the Engagement Picture', airdate: '11/2/2000', notes: [''], watched: false },
    { id: 'friends_152', showname: 'Friends', season: 7, episode: 6, overall: 152, episodename: 'The One with the Nap Partners', airdate: '11/9/2000', notes: [''], watched: false },
    { id: 'friends_153', showname: 'Friends', season: 7, episode: 7, overall: 153, episodename: 'The One with Ross\'s Library Book', airdate: '11/16/2000', notes: [''], watched: false },
    { id: 'friends_154', showname: 'Friends', season: 7, episode: 8, overall: 154, episodename: 'The One Where Chandler Doesn\'t Like Dogs', airdate: '11/23/2000', notes: [''], watched: false },
    { id: 'friends_155', showname: 'Friends', season: 7, episode: 9, overall: 155, episodename: 'The One with All the Candy', airdate: '12/7/2000', notes: [''], watched: false },
    { id: 'friends_156', showname: 'Friends', season: 7, episode: 10, overall: 156, episodename: 'The One with the Holiday Armadillo', airdate: '12/14/2000', notes: [''], watched: false },
    { id: 'friends_157', showname: 'Friends', season: 7, episode: 11, overall: 157, episodename: 'The One with All the Cheesecakes', airdate: '1/4/2001', notes: [''], watched: false },
    { id: 'friends_158', showname: 'Friends', season: 7, episode: 12, overall: 158, episodename: 'The One Where They\'re Up All Night', airdate: '1/11/2001', notes: [''], watched: false },
    { id: 'friends_159', showname: 'Friends', season: 7, episode: 13, overall: 159, episodename: 'The One Where Rosita Dies', airdate: '2/1/2001', notes: [''], watched: false },
    { id: 'friends_160', showname: 'Friends', season: 7, episode: 14, overall: 160, episodename: 'The One Where They All Turn Thirty', airdate: '2/8/2001', notes: [''], watched: false },
    { id: 'friends_161', showname: 'Friends', season: 7, episode: 15, overall: 161, episodename: 'The One with Joey\'s New Brain', airdate: '2/15/2001', notes: [''], watched: false },
    { id: 'friends_162', showname: 'Friends', season: 7, episode: 16, overall: 162, episodename: 'The One with the Truth About London', airdate: '2/22/2001', notes: [''], watched: false },
    { id: 'friends_163', showname: 'Friends', season: 7, episode: 17, overall: 163, episodename: 'The One with the Cheap Wedding Dress', airdate: '3/15/2001', notes: [''], watched: false },
    { id: 'friends_164', showname: 'Friends', season: 7, episode: 18, overall: 164, episodename: 'The One with Joey\'s Award', airdate: '3/29/2001', notes: [''], watched: false },
    { id: 'friends_165', showname: 'Friends', season: 7, episode: 19, overall: 165, episodename: 'The One with Ross and Monica\'s Cousin', airdate: '4/19/2001', notes: [''], watched: false },
    { id: 'friends_166', showname: 'Friends', season: 7, episode: 20, overall: 166, episodename: 'The One with Rachel\'s Big Kiss', airdate: '4/26/2001', notes: [''], watched: false },
    { id: 'friends_167', showname: 'Friends', season: 7, episode: 21, overall: 167, episodename: 'The One with the Vows', airdate: '5/3/2001', notes: [''], watched: false },
    { id: 'friends_168', showname: 'Friends', season: 7, episode: 22, overall: 168, episodename: 'The One with Chandler\'s Dad', airdate: '5/10/2001', notes: [''], watched: false },
    { id: 'friends_169', showname: 'Friends', season: 7, episode: 23, overall: 169, episodename: 'The One with Monica and Chandler\'s Wedding', airdate: '5/17/2001', notes: [''], watched: false },
    { id: 'friends_170', showname: 'Friends', season: 7, episode: 24, overall: 170, episodename: 'The One with Monica and Chandler\'s Wedding', airdate: '5/17/2001', notes: [''], watched: false },
    { id: 'friends_171', showname: 'Friends', season: 8, episode: 1, overall: 171, episodename: 'The One After \'I Do\'', airdate: '9/27/2001', notes: [''], watched: false },
    { id: 'friends_172', showname: 'Friends', season: 8, episode: 2, overall: 172, episodename: 'The One with the Red Sweater', airdate: '10/4/2001', notes: [''], watched: false },
    { id: 'friends_173', showname: 'Friends', season: 8, episode: 3, overall: 173, episodename: 'The One Where Rachel Tells...', airdate: '10/11/2001', notes: [''], watched: false },
    { id: 'friends_174', showname: 'Friends', season: 8, episode: 4, overall: 174, episodename: 'The One with the Videotape', airdate: '10/18/2001', notes: [''], watched: false },
    { id: 'friends_175', showname: 'Friends', season: 8, episode: 5, overall: 175, episodename: 'The One with Rachel\'s Date', airdate: '10/25/2001', notes: [''], watched: false },
    { id: 'friends_176', showname: 'Friends', season: 8, episode: 6, overall: 176, episodename: 'The One with the Halloween Party', airdate: '11/1/2001', notes: [''], watched: false },
    { id: 'friends_177', showname: 'Friends', season: 8, episode: 7, overall: 177, episodename: 'The One with the Stain', airdate: '11/8/2001', notes: [''], watched: false },
    { id: 'friends_178', showname: 'Friends', season: 8, episode: 8, overall: 178, episodename: 'The One with the Stripper', airdate: '11/15/2001', notes: [''], watched: false },
    { id: 'friends_179', showname: 'Friends', season: 8, episode: 9, overall: 179, episodename: 'The One with the Rumor', airdate: '11/22/2001', notes: [''], watched: false },
    { id: 'friends_180', showname: 'Friends', season: 8, episode: 10, overall: 180, episodename: 'The One with Monica\'s Boots', airdate: '12/6/2001', notes: [''], watched: false },
    { id: 'friends_181', showname: 'Friends', season: 8, episode: 11, overall: 181, episodename: 'The One with Ross\'s Step Forward, The One with The Creepy Holiday Card', airdate: '12/13/2001'
      , notes: [''], watched: false },
    { id: 'friends_182', showname: 'Friends', season: 8, episode: 12, overall: 182, episodename: 'The One Where Joey Dates Rachel', airdate: '1/10/2002', notes: [''], watched: false },
    { id: 'friends_183', showname: 'Friends', season: 8, episode: 13, overall: 183, episodename: 'The One Where Chandler Takes a Bath', airdate: '1/17/2002', notes: [''], watched: false },
    { id: 'friends_184', showname: 'Friends', season: 8, episode: 14, overall: 184, episodename: 'The One with the Secret Closet', airdate: '1/31/2002', notes: [''], watched: false },
    { id: 'friends_185', showname: 'Friends', season: 8, episode: 15, overall: 185, episodename: 'The One with the Birthing Video', airdate: '2/7/2002', notes: [''], watched: false },
    { id: 'friends_186', showname: 'Friends', season: 8, episode: 16, overall: 186, episodename: 'The One Where Joey Tells Rachel', airdate: '2/28/2002', notes: [''], watched: false },
    { id: 'friends_187', showname: 'Friends', season: 8, episode: 17, overall: 187, episodename: 'The One with the Tea Leaves', airdate: '3/7/2002', notes: [''], watched: false },
    { id: 'friends_188', showname: 'Friends', season: 8, episode: 18, overall: 188, episodename: 'The One in Massapequa, The One with the Zesty Guy', airdate: '3/28/2002'
      , notes: [''], watched: false },
    { id: 'friends_189', showname: 'Friends', season: 8, episode: 19, overall: 189, episodename: 'The One with Joey\'s Interview', airdate: '4/4/2002', notes: [''], watched: false },
    { id: 'friends_190', showname: 'Friends', season: 8, episode: 20, overall: 190, episodename: 'The One with the Baby Shower', airdate: '4/25/2002', notes: [''], watched: false },
    { id: 'friends_191', showname: 'Friends', season: 8, episode: 21, overall: 191, episodename: 'The One with the Cooking Class', airdate: '5/2/2002', notes: [''], watched: false },
    { id: 'friends_192', showname: 'Friends', season: 8, episode: 22, overall: 192, episodename: 'The One Where Rachel is Late', airdate: '5/9/2002', notes: [''], watched: false },
    { id: 'friends_193', showname: 'Friends', season: 8, episode: 23, overall: 193, episodename: 'The One Where Rachel Has a Baby', airdate: '5/16/2002', notes: [''], watched: false },
    { id: 'friends_194', showname: 'Friends', season: 8, episode: 24, overall: 194, episodename: 'The One Where Rachel Has a Baby', airdate: '5/16/2002', notes: [''], watched: false },
    { id: 'friends_195', showname: 'Friends', season: 9, episode: 1, overall: 195, episodename: 'The One Where No One Proposes', airdate: '9/26/2002', notes: [''], watched: false },
    { id: 'friends_196', showname: 'Friends', season: 9, episode: 2, overall: 196, episodename: 'The One Where Emma Cries', airdate: '10/3/2002', notes: [''], watched: false },
    { id: 'friends_197', showname: 'Friends', season: 9, episode: 3, overall: 197, episodename: 'The One with the Pediatrician', airdate: '10/10/2002', notes: [''], watched: false },
    { id: 'friends_198', showname: 'Friends', season: 9, episode: 4, overall: 198, episodename: 'The One with the Sharks', airdate: '10/17/2002', notes: [''], watched: false },
    { id: 'friends_199', showname: 'Friends', season: 9, episode: 5, overall: 199, episodename: 'The One with Phoebe\'s Birthday Dinner', airdate: '10/31/2002', notes: [''], watched: false },
    { id: 'friends_200', showname: 'Friends', season: 9, episode: 6, overall: 200, episodename: 'The One with the Male Nanny', airdate: '11/7/2002', notes: [''], watched: false },
    { id: 'friends_201', showname: 'Friends', season: 9, episode: 7, overall: 201, episodename: 'The One with Ross\'s Inappropriate Song', airdate: '11/14/2002', notes: [''], watched: false },
    { id: 'friends_202', showname: 'Friends', season: 9, episode: 8, overall: 202, episodename: 'The One with Rachel\'s Other Sister', airdate: '11/21/2002', notes: [''], watched: false },
    { id: 'friends_203', showname: 'Friends', season: 9, episode: 9, overall: 203, episodename: 'The One with Rachel\'s Phone Number', airdate: '12/5/2002', notes: [''], watched: false },
    { id: 'friends_204', showname: 'Friends', season: 9, episode: 10, overall: 204, episodename: 'The One with Christmas in Tulsa', airdate: '12/12/2002', notes: [''], watched: false },
    { id: 'friends_205', showname: 'Friends', season: 9, episode: 11, overall: 205, episodename: 'The One Where Rachel Goes Back to Work', airdate: '1/9/2003', notes: [''], watched: false },
    { id: 'friends_206', showname: 'Friends', season: 9, episode: 12, overall: 206, episodename: 'The One with Phoebe\'s Rats', airdate: '1/16/2003', notes: [''], watched: false },
    { id: 'friends_207', showname: 'Friends', season: 9, episode: 13, overall: 207, episodename: 'The One Where Monica Sings', airdate: '1/30/2003', notes: [''], watched: false },
    { id: 'friends_208', showname: 'Friends', season: 9, episode: 14, overall: 208, episodename: 'The One with the Blind Dates', airdate: '2/6/2003', notes: [''], watched: false },
    { id: 'friends_209', showname: 'Friends', season: 9, episode: 15, overall: 209, episodename: 'The One with the Mugging', airdate: '2/13/2003', notes: [''], watched: false },
    { id: 'friends_210', showname: 'Friends', season: 9, episode: 16, overall: 210, episodename: 'The One with the Boob Job', airdate: '2/20/2003', notes: [''], watched: false },
    { id: 'friends_211', showname: 'Friends', season: 9, episode: 17, overall: 211, episodename: 'The One with the Memorial Service', airdate: '3/13/2003', notes: [''], watched: false },
    { id: 'friends_212', showname: 'Friends', season: 9, episode: 18, overall: 212, episodename: 'The One with the Lottery', airdate: '4/3/2003', notes: [''], watched: false },
    { id: 'friends_213', showname: 'Friends', season: 9, episode: 19, overall: 213, episodename: 'The One with Rachel\'s Dream', airdate: '4/17/2003', notes: [''], watched: false },
    { id: 'friends_214', showname: 'Friends', season: 9, episode: 20, overall: 214, episodename: 'The One with the Soap Opera Party', airdate: '4/24/2003', notes: [''], watched: false },
    { id: 'friends_215', showname: 'Friends', season: 9, episode: 21, overall: 215, episodename: 'The One with the Fertility Test', airdate: '5/1/2003', notes: [''], watched: false },
    { id: 'friends_216', showname: 'Friends', season: 9, episode: 22, overall: 216, episodename: 'The One with the Donor', airdate: '5/8/2003', notes: [''], watched: false },
    { id: 'friends_217', showname: 'Friends', season: 9, episode: 23, overall: 217, episodename: 'The One in Barbados', airdate: '5/15/2003', notes: [''], watched: false },
    { id: 'friends_218', showname: 'Friends', season: 9, episode: 24, overall: 218, episodename: 'The One in Barbados', airdate: '5/15/2003', notes: [''], watched: false },
    { id: 'friends_219', showname: 'Friends', season: 10, episode: 1, overall: 219, episodename: 'The One After Joey and Rachel Kiss', airdate: '9/25/2003', notes: [''], watched: false },
    { id: 'friends_220', showname: 'Friends', season: 10, episode: 2, overall: 220, episodename: 'The One Where Ross is Fine', airdate: '10/2/2003', notes: [''], watched: false },
    { id: 'friends_221', showname: 'Friends', season: 10, episode: 3, overall: 221, episodename: 'The One with Ross\'s Tan', airdate: '10/9/2003', notes: [''], watched: false },
    { id: 'friends_222', showname: 'Friends', season: 10, episode: 4, overall: 222, episodename: 'The One with the Cake', airdate: '10/23/2003', notes: [''], watched: false },
    { id: 'friends_223', showname: 'Friends', season: 10, episode: 5, overall: 223, episodename: 'The One Where Rachel\'s Sister Babysits', airdate: '10/30/2003', notes: [''], watched: false },
    { id: 'friends_224', showname: 'Friends', season: 10, episode: 6, overall: 224, episodename: 'The One with Ross\'s Grant', airdate: '11/6/2003', notes: [''], watched: false },
    { id: 'friends_225', showname: 'Friends', season: 10, episode: 7, overall: 225, episodename: 'The One with the Home Study', airdate: '11/13/2003', notes: [''], watched: false },
    { id: 'friends_226', showname: 'Friends', season: 10, episode: 8, overall: 226, episodename: 'The One with the Late Thanksgiving', airdate: '11/20/2003', notes: [''], watched: false },
    { id: 'friends_227', showname: 'Friends', season: 10, episode: 9, overall: 227, episodename: 'The One with the Birth Mother', airdate: '1/4/2004', notes: [''], watched: false },
    { id: 'friends_228', showname: 'Friends', season: 10, episode: 10, overall: 228, episodename: 'The One Where Chandler Gets Caught', airdate: '1/15/2004', notes: [''], watched: false },
    { id: 'friends_229', showname: 'Friends', season: 10, episode: 11, overall: 229, episodename: 'The One Where the Stripper Cries', airdate: '2/5/2004', notes: [''], watched: false },
    { id: 'friends_230', showname: 'Friends', season: 10, episode: 12, overall: 230, episodename: 'The One with Phoebe\'s Wedding', airdate: '2/12/2004', notes: [''], watched: false },
    { id: 'friends_231', showname: 'Friends', season: 10, episode: 13, overall: 231, episodename: 'The One Where Joey Speaks French', airdate: '2/19/2004', notes: [''], watched: false },
    { id: 'friends_232', showname: 'Friends', season: 10, episode: 14, overall: 232, episodename: 'The One with Princess Consuela', airdate: '2/26/2004', notes: [''], watched: false },
    { id: 'friends_233', showname: 'Friends', season: 10, episode: 15, overall: 233, episodename: 'The One Where Estelle Dies', airdate: '4/22/2004', notes: [''], watched: false },
    { id: 'friends_234', showname: 'Friends', season: 10, episode: 16, overall: 234, episodename: 'The One with Rachel\'s Going Away Party', airdate: '4/29/2004', notes: [''], watched: false },
    { id: 'friends_235', showname: 'Friends', season: 10, episode: 17, overall: 235, episodename: 'The Last One', airdate: '5/6/2004', notes: [''], watched: false },
    { id: 'friends_236', showname: 'Friends', season: 10, episode: 18, overall: 236, episodename: 'The Last One', airdate: '5/6/2004', notes: [''], watched: false }
    ];

  constructor(private commonfunctions: CommonfunctionsService) { }

  getEpisodes() {
    return this.episodes;
  }

  getEpisodesByShow(showname: string) {
    return this.episodes.filter(episode => episode.showname === showname);
  }

  getEpisodesByShowAndSeason(showname: string, season: number) {
    return this.episodes.filter(episode => episode.showname === showname && episode.season === season);
  }

  getEpisodesByShowAndDates(showname: string, startdate: Date, enddate: Date) {
    return this.episodes.filter(episode => this.commonfunctions.isDateInRange(episode.airdate, startdate, enddate));
  }

  getEpisodeByShowAndEpisodeName(showname: string, episodename: string) {
    return this.episodes.filter(episode => episode.showname === showname && episode.episodename === episodename);
  }

  addEpisode(showname: string, episodename: string, season: number, overall: number, episode: number, airdate: string, notes: string, watched: boolean): boolean {
    const _episode = {
      id: `${showname.split(' ').join('').toLowerCase()}_overall`,
      showname: showname,
      episodename: episodename,
      season: season,
      overall: overall,
      episode: episode,
      airdate: airdate,
      notes: [notes],
      watched: watched
    };

    if (!this.episodes.findIndex(_e => _e.id === _episode.id)) {
      this.episodes.push(_episode);
      return true;
    } else {
      return false;
    }
  }

  deleteEpisode(id: string): boolean {
    const epIndex = this.episodes.findIndex(_episode => _episode.id === id);

    if (epIndex) {
      this.episodes.splice(epIndex, 1);
      return true;
    } else {
      return false;
    }
  }

  addNote(id: string, note: string): boolean {
    const episodeIndex = this.episodes.findIndex(_episode => _episode.id === id);

    if (!episodeIndex) {
      return false;
    } else {
      if (!this.episodes[episodeIndex].notes) {
        this.episodes[episodeIndex].notes = [];
      }

      this.episodes[episodeIndex].notes.push(note);
      return true;
    }
  }

  deleteNote(id: string, note: string): boolean {
    const epIdx = this.episodes.findIndex(_ep => _ep.id === id);

    if (epIdx) {
      const noteIdx = this.episodes[epIdx].notes.findIndex(_n => _n === note);

      if (noteIdx) {
        this.episodes[epIdx].notes.splice(noteIdx, 1);
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  setEpisodeWatchedFlag(id: string, watched: boolean): boolean {
    const episodeIndex = this.episodes.findIndex(_episode => _episode.id === id);

    if (!episodeIndex) {
      return false;
    } else {
      this.episodes[episodeIndex].watched = watched;
      return true;
    }
  }
}
