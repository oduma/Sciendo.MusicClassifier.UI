import { TrackDetails } from './track-details';
import { ArtistSummary } from './artist-summary';

export class ArtistDetails {
    trackDetails:TrackDetails[];
    bandWikiPageUrl: string;
    bandMembers: ArtistSummary[];
}
