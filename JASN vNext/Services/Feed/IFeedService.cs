﻿namespace JASN_vNext.Services
{
    using System.ServiceModel.Syndication;
    using System.Threading.Tasks;

    /// <summary>
    /// Builds <see cref="SyndicationFeed"/>'s containing meta data about the feed and the feed entries.
    /// Note: We are targeting Atom 1.0 over RSS 2.0 because Atom 1.0 is a newer and more well defined format. Atom 1.0 
    /// is a standard and RSS is not. 
    /// (See http://www.intertwingly.net/wiki/pie/Rss20AndAtom10Compared).
    /// (See http://atomenabled.org/developers/syndication/ for more information about Atom 1.0).
    /// (See https://tools.ietf.org/html/rfc4287 for the official Atom Syndication Format specifications).
    /// (See http://feedvalidator.org/ to validate your feed).
    /// (See http://stackoverflow.com/questions/1301392/pagination-in-feeds-like-atom-and-rss to see how you can add 
    /// paging to your feed).
    /// </summary>
    public interface IFeedService
    {
        /// <summary>
        /// Gets the feed containing meta data about the feed and the feed entries.
        /// </summary>
        /// <returns>A <see cref="SyndicationFeed"/>.</returns>
        SyndicationFeed GetFeed();

        /// <summary>
        /// Publishes the fact that the feed has updated to subscribers using the PubSubHubbub v0.4 protocol.
        /// </summary>
        /// <remarks>
        /// The PubSubHubbub is an open standard created by Google which allows subscription of feeds and allows 
        /// updates to be pushed to them rather than them having to poll the feed. This means subscribers get live
        /// updates as they happen and also we may save some bandwidth because we have less polling of our feed.
        /// See https://pubsubhubbub.googlecode.com/git/pubsubhubbub-core-0.4.html for PubSubHubbub v0.4 specification.
        /// See https://github.com/pubsubhubbub for PubSubHubbub GitHub projects.
        /// See http://pubsubhubbub.appspot.com/ for Google's implementation of the PubSubHubbub hub we are using.
        /// </remarks>
        Task PublishUpdate();
    }
}